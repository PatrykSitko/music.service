import fs from "../customFS.mjs";

/**@param {String} filepath the path to the file location.
 * @param {Object} res Object<ServerResponse>
 *
 * If the path to the file location exists:
 *
 * The server response will be the apropriate file.
 *
 * Else:
 *
 *  the server response will be:
 *  {
 *
 * res.statusCode = 404;
 *
 * if(sendStatus) res.sendStatus(404);
 *
 * }
 *
 * @param {Boolean?} sendStatus if sendStatus equals true:
 *
 * the server will respond with res.sendStatus(404).
 *
 * else:
 *
 * the server will only set response status code to: 404.
 *
 * @returns true if the path to the file location exists and false if the path to the file location doesn't exists.
 */
export function sendingFile(filepath, res, sendStatus = true) {
  if (fs.existsSync(filepath)) {
    res.sendFile(filepath);
    return true;
  } else {
    res.statusCode = 404;
    if (sendStatus) {
      res.sendStatus(404);
    }
    return false;
  }
}

export const fileType = {
  image: ["WebP", "APNG", "BMP", "GIF", "ICO", "JPEG", "PNG", "SVG", "WebP"]
};

export async function sendingRandomFile(filepath, res, sendStatus = true) {
  if (!fs.existsSync(filepath) || !fs.lstatSync(filepath).isDirectory()) {
    res.statusCode = 404;
    if (sendStatus) {
      res.sendStatus(404);
    }
    return false;
  }
  try {
    const files = await new Promise((resolve, reject) =>
      fs.readdir(filepath, (error, files) => {
        if (error) {
          reject(error);
        } else {
          resolve(files);
        }
      })
    );
    const file = files[Math.floor(Math.random() * (files.length - 1))];
    return sendingFile(`${filepath}\\${file}`, res, sendStatus);
  } catch (error) {
    console.error(error);
    res.statusCode = 404;
    if (sendStatus) {
      res.sendStatus(404);
    }
    return false;
  }
}
