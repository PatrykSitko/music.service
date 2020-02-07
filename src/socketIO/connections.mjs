import { io as socketIO } from "../../bin/www.mjs";
import emmitConnectionToken from "./connection/emit/pendingConnectionToken.mjs";
import onConnectionTokenRecieved from "./connection/on/connectionTokenRecieved.mjs";
import emmitRegions from "./connection/emit/regions";
import onRequestGenres from "./connection/on/requestGenres";

export default {
  connect: () => {
    socketIO.on("connection", client => {
      emmitConnectionToken(/*to*/ client);
      onConnectionTokenRecieved(/*by*/ client);
      emmitRegions(/*to*/ client);
      onRequestGenres(client);
      // client.on("disconnect", clientData => {
      //   deleteConnectionToken(clientData.token);
      // });
    });
  }
};
