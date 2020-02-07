import query from "../async/query.mjs";
import generateOptions from "../generate/options.mjs";

export const option = generateOptions(["genre_id", "category", "region"]);

export default (selection = "*", suffix = null) =>
  query(`select ${selection} from genres ${suffix ? suffix : ""}`);
