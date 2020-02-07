import { PLAYER_NEXT } from "../../types";

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
        updated.list.previous.unshift(current);
      } else if (previous.includes(updated.current)) {
        previous.splice(previous.indexOf(updated.current), 1);
        updated.list.previous = previous;
        updated.list.previous.unshift(current);
      }
    }
  } else if (next.length > 0) {
    updated.current = next.shift();
    updated.list.next = next;
    updated.list.previous.unshift(current);
  } else if (previous.length > 0) {
    updated.current = previous.pop();
    updated.list.previous = previous;
    updated.list.previous.unshift(current);
  }
  return {
    type: PLAYER_NEXT,
    payload: {
      player: { ...playerState, song: { ...playerState.song, ...updated } }
    }
  };
};
