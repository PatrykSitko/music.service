import query from "../async/query.mjs";
import generateOptions from "../generate/options.mjs";

export const option = generateOptions([
  "music_id",
  "artist_id",
  "album_id",
  "title",
  "path"
]);

export default (selection = "*", suffix = null) =>
  query(`select ${selection} from musics ${suffix ? suffix : ""}`);
