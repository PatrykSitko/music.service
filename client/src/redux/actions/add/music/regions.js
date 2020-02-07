import { ADD_REGIONS } from "../../types";

export default (currentMusicState, regions) => {
  const regionsCopy = { ...currentMusicState.regions };
  for (let letter of Object.keys(regions)) {
    for (let region of regions[letter]) {
      if (typeof regionsCopy[letter] !== "object") {
        regionsCopy[letter] = [];
      }
      if (!regionsCopy[letter].includes(region)) {
        regionsCopy[letter].push(region);
      }
    }
  }
  return {
    type: ADD_REGIONS,
    payload: { music: { ...currentMusicState, regions: regionsCopy } }
  };
};
