import { ADD_LINK } from "../types";

export default (currentState, link) => {
  return {
    type: ADD_LINK,
    payload: { links: [...currentState.links, link] }
  };
};
