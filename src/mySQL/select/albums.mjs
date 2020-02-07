import query from "../async/query.mjs";
import generateOptions from "../generate/options.mjs";

export const option = generateOptions([
  "album_id",
  "title",
  "release_date",
  "artist_id",
  "genre_id"
]);

export default (selection = "*", suffix = null) =>
  query(`select ${selection} from albums ${suffix ? suffix : ""}`);
