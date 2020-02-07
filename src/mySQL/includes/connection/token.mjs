import selectConnectionTokens, {
  option
} from "../../select/connection/tokens.mjs";

export default async token =>
  (
    await selectConnectionTokens(
      option.connection_token,
      `where connection_token="${token}"`
    )
  ).length > 0;
