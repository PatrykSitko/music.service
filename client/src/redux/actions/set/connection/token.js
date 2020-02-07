import SET_CONNECTION_TOKEN from "../../types";

export default (currentUserState, connectionToken) => ({
  type: SET_CONNECTION_TOKEN,
  payload: {
    user: {
      ...currentUserState,
      connectionToken:
        typeof connectionToken === "string"
          ? connectionToken
          : currentUserState.connectionToken
    }
  }
});
