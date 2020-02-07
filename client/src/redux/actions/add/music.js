import { ADD_MUSIC } from "../types";

export default (currentState, image, title, artist, description, sound) => ({
  type: ADD_MUSIC,
  payload: {
    music: [...currentState.music, { image, title, artist, description, sound }]
  }
});
