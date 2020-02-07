import express from "express";
import fs from "../customFS.mjs";
import { sendingFile } from "./tools.mjs";

const router = express.Router();

router.get("/:artist/:year/:title", (req, res) => {
  const { artist, year, title } = req.params;
  const music_title =
    title.indexOf(".") > -1 ? title.slice(0, title.indexOf(".")) : title;
  sendingFile(
    `${fs.projectPath}\\res\\music\\${artist}\\${year}\\${music_title.replace(
      "%20",
      " "
    )}.mp3`,
    res
  );
});

export default router;
