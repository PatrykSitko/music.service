import client from "../../../../../io";
import setConnectionToken from "../../../../actions/set/connection/token";
import addMusicRegions from "../../../../actions/add/music/regions";
import ioStoreConnectors from "../../../../../io/store/connectors";

export default ({ getState: getStore, dispatch }) => {
  const { state } = getStore();
  client.on("connection-token", serverData => {
    console.log(serverData);
    dispatch(setConnectionToken(state.user.connectionToken, serverData));
    client.emit("connection-token-recieved", serverData);
  });
  client.on(
    "regions",
    regions =>
      console.log(regions) || dispatch(addMusicRegions(state.music, regions))
  );
  ioStoreConnectors.forEach(connector => connector({ getStore, dispatch }));
};
