import query from "../../async/query.mjs";

export default token =>
  query(`insert into connection_tokens (connection_token) values ('${token}')`);
