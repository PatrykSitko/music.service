import path from "path";
import cors from "cors";
import logger from "morgan";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";

import indexRouter from "./src/routes/index.mjs";
import musicRouter from "./src/routes/music.mjs";
import regionRouter from "./src/routes/region.mjs";
import thumbnailRouter from "./src/routes/thumbnail.mjs";
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/", indexRouter);
app.use("/region", regionRouter);
app.use("/music", musicRouter);
app.use("/thumbnail", thumbnailRouter);
export default app;
