import query from "../async/query.mjs";
import generateOptions from "../generate/options.mjs";

export const option = generateOptions(["region"]);

export default (selection = "*", suffix = null) =>
  query(`select ${selection} from regions ${suffix ? suffix : ""}`);
