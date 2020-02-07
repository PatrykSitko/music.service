import query from "../../async/query.mjs";

export default token =>
  query(`delete from connection_tokens where connection_token=${token}`);
