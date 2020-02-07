import { PLAYER_PREVIOUS } from "../../types";

export default playerState => {
  const {
    shuffle,
    song: {
      current,
      list: { next, previous }
    }
  } = { ...playerState };
  const updated = { current, list: { next, previous } };

  if (shuffle) {
    const shuffleCombo = [...previous, ...next];
    if (shuffleCombo.length > 0) {
      const random =
        Math.floor(Math.random() * 100) <= 50
          ? Math.floor(Math.random() * (shuffleCombo.length - 1))
          : Math.ceil(Math.random() * (shuffleCombo.length - 1));
      updated.current = shuffleCombo[random];
      if (next.includes(updated.current)) {
        next.splice(next.indexOf(updated.current), 1);
        updated.list.next = next;
        updated.list.next.unshift(current);
      } else if (previous.includes(updated.current)) {
        previous.splice(previous.indexOf(updated.current), 1);
        updated.list.previous = previous;
        updated.list.next.unshift(current);
      }
    }
  } else if (previous.length > 0) {
    updated.current = previous.shift();
    updated.list.previous = previous;
    updated.list.next.unshift(current);
  } else if (next.length > 0) {
    updated.current = next.pop();
    updated.list.next = next;
    updated.list.next.unshift(current);
  }
  return {
    type: PLAYER_PREVIOUS,
    payload: {
      player: { ...playerState, song: { ...playerState.song, ...updated } }
    }
  };
};
