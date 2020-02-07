import generateConnectionToken from "../../../mySQL/generate/connection/token.mjs";
import insertPendingConnectionToken from "../../../mySQL/insert/pending/connection/token.mjs";

export default client => {
  const connectionToken = generateConnectionToken();
  console.log(connectionToken);
  insertPendingConnectionToken(connectionToken)
    .then(() => client.emit("connection-token", connectionToken))
    .catch(console.error);
};
