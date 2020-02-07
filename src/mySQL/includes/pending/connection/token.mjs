import selectPendingConnectionTokens, {
  option
} from "../../../select/pending/connection/tokens.mjs";

export default token =>
  new Promise(async (resolve, reject) =>
    (
      await selectPendingConnectionTokens(
        option.pending_connection_token,
        `where ${option.pending_connection_token}="${token}"`
      )
    ).length > 0
      ? resolve(token)
      : reject(token)
  );
