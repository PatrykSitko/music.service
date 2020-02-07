import query from "../async/query.mjs";
import generateOptions from "../generate/options.mjs";

export const option = generateOptions([
  "user_id",
  "firstname",
  "lastname",
  "birth_date",
  "login",
  "password",
  "token"
]);
export default (selection = "*", suffix = null) =>
  query(`select ${selection} from users ${suffix ? suffix : ""}`);
