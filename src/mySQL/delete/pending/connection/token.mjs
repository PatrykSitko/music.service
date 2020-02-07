import query from "../../../async/query.mjs";

export default token =>
  query(
    `delete from pending_connection_tokens where pending_connection_token=${token}`
  );
