import insertConnectionToken from "../../../mySQL/insert/connection/token.mjs";
import deletePendingConnectionToken from "../../../mySQL/delete/pending/connection/token.mjs";
import includesPendingConnectionToken from "../../../mySQL/includes/pending/connection/token.mjs";

export default client =>
  client.on("connection-token-recieved", clientData => {
    includesPendingConnectionToken(clientData.connectionToken)
      .then(connectionToken =>
        insertConnectionToken(connectionToken)
          .then(() =>
            deletePendingConnectionToken(connectionToken).catch(console.error)
          )
          .catch(console.error)
      )
      .catch(console.error);
  });
