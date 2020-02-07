import query from "../../../async/query.mjs";

export default token =>
  query(
    `insert into pending_connection_tokens (pending_connection_token) values ('${token}')`
  );
