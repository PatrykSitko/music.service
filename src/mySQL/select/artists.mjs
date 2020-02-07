import query from "../async/query.mjs";
import generateOptions from "../generate/options.mjs";

export const option = generateOptions([
  "artist_id",
  "firstname",
  "lastname",
  "birthdate"
]);

export default (selection = "*", suffix = null) =>
  query(`select ${selection} from artists ${suffix ? suffix : ""}`);
