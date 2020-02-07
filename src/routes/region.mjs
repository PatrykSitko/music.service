import express from "express";
import fs from "../customFS.mjs";
import { sendingRandomFile } from "./tools.mjs";

const router = express.Router();

router.get("/:region", (req, res) => {
  const { region } = req.params;
  sendingRandomFile(`${fs.projectPath}res\\region\\${region}`, res);
});

export default router;
