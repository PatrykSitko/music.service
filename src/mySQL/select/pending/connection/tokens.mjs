import query from "../../../async/query.mjs";
import generateOptions from "../../../generate/options.mjs";

export const option = generateOptions(["pending_connection_token"]);

export default (selection = "*", suffix = null) =>
  query(
    `select ${selection} from pending_connection_tokens ${suffix ? suffix : ""}`
  );
