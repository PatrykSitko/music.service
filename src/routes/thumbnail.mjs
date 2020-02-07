import express from "express";
import fs from "../customFS.mjs";
import { sendingFile } from "./tools.mjs";

const router = express.Router();

router.get("/:artist/:year/:title", (req, res) => {
  const { artist, year, title } = req.params;
  const album_title =
    title.indexOf(".") > -1 ? title.slice(0, title.indexOf(".")) : title;
  sendingFile(
    `${fs.projectPath}\\res\\thumbnail\\${artist}\\${year}\\${album_title}.jpg`,
    res
  );
});

export default router;
