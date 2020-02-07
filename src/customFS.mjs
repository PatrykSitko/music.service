import fs from "fs";
import util from "util";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import question from "./questions.mjs";
import child_process from "child_process";
import parser from "fast-xml-parser";

const projectPath = path.join(dirname(fileURLToPath(import.meta.url)), "../");
const exec = util.promisify(child_process.exec);

function copyFileSync(source, target) {
  let targetFile = target;

  //if target is a directory a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
  let files = [];

  //check if folder needs to be created or integrated
  const targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  //copy
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(function(file) {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
}
/**
 * @returns {Boolean} true if command is available; else false;
 */
async function isCommandAvailable(command) {
  try {
    await exec(command);
  } catch ({ stderr }) {
    if (
      stderr ===
      `'${command}' is not recognized as an internal or external command,\r\noperable program or batch file.\r\n`
    ) {
      return false;
    }
  }
  return true;
}

/**
 *
 * @param newPathEntry The path entry you would like to add to the local user environment variables.
 * @param invocationCommand The command that will be used in the command-line to invoke the application that corresponds to the new path entry.
 * @returns {Promise} true when adding new user path entry is terminated.
 */
function addUserPathEntry(newPathEntry, invocationCommand) {
  return new Promise(async resolve => {
    try {
      const { stdout: userPath } = await exec(
        '%SystemRoot%\\System32\\reg.exe query "HKCU\\Environment" /v Path'
      );
      const localPath = userPath
        .replace("HKEY_CURRENT_USER\\Environment", "")
        .replace("Path    REG_EXPAND_SZ", "")
        .trim();

      console.log("Adding new user path entry: " + newPathEntry);
      if (!localPath.includes(newPathEntry)) {
        const { stdout } = await exec(
          `setx path "${localPath}${newPathEntry}"`
        );
        console.log(stdout);
        console.log("Finnished adding new user path entry: " + newPathEntry);
        await question.askToReboot();
      } else {
        console.log("UserPath already contains path: " + newPathEntry);
        console.log("Abording adding new user path entry.");
        try {
          await exec(invocationCommand);
        } catch ({ stderr }) {
          if (
            stderr ===
            `'${invocationCommand}' is not recognized as an internal or external command,\r\n" +
            "operable program or batch file.\r\n`
          ) {
            console.log("Command:", stderr.trim());
            console.log("path variable need to be updated.");
            await question.askToReboot();
          }
        }
        await question.continueOnInput();
      }
    } catch (err) {
      console.error(err);
    }
    resolve(true);
  });
}

async function getFileName(filePath) {
  let filepath = filePath;
  if (filepath.includes(projectPath)) {
    filepath = filePath.replace(projectPath, "");
  }
  while (filepath.includes("'")) {
    filepath = filepath.replace("'", "");
  }
  if ((await fs.promises.lstat(`${filepath}`)).isDirectory()) {
    return undefined;
  } else {
    return filepath.slice(filepath.lastIndexOf("\\") + 1, filepath.length);
  }
}
function readXML(path, encoding = "UTF-8", xmlOptions) {
  return new Promise((resolve, reject) => {
    let xmlData = undefined;
    try {
      xmlData = fs.readFileSync(path, encoding);
      if (parser.validate(xmlData, xmlOptions)) {
        resolve(parser.parse(xmlData, xmlOptions));
      } else {
        reject(xmlData);
      }
    } catch (e) {
      reject(e);
    }
  });
}
function readXMLSync(path, encoding = "UTF-8", xmlOptions) {
  try {
    const xmlData = fs.readFileSync(path, encoding);
    if (parser.validate(xmlData, xmlOptions)) {
      return parser.parse(xmlData, xmlOptions);
    } else {
      return undefined;
    }
  } catch (e) {
    console.error(e);
  }
}

export default {
  ...fs,
  exec,
  path,
  copyFileSync,
  copyFolderRecursiveSync,
  isCommandAvailable,
  addUserPathEntry,
  getFileName,
  projectPath,
  readXML,
  readXMLSync
};
