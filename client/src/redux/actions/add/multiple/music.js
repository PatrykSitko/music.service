import { ADD_MUSICS } from "../types";

export default (
  currentState,
  musics = [
    { image: "src", title: "", artist: "", description: "", sound: "src" }
  ]
) => ({
  type: ADD_MUSICS,
  payload: {
    music: [...currentState.music, ...musics]
  }
});
