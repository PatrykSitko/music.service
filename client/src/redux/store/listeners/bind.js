import bindWindowListeners from "./listener/window";
import bindHistoryListener from "./listener/history";
import bindPlayerListener from "./listener/player";
import bindSocketioListener from "./listener/socketio";

export default store => {
  bindHistoryListener(store);
  bindWindowListeners(store);
  bindSocketioListener(store);
  bindPlayerListener(store);
};
