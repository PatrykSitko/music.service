import { TOGGLE_MUSIC_REGION_SELECTED } from "../../../types";

export default (currentMusicState, letter, region) => {
  let isSelected = false;
  const regionsCopy = { ...currentMusicState.regions };
  regionsCopy[letter] = regionsCopy[letter].map(
    ({ title, selected, ...other }) =>
      title === region
        ? {
            title,
            ...other,
            selected: selected ? (isSelected = false) : (isSelected = true)
          }
        : { title, selected, ...other }
  );
  const currentRegionsCopy = [...currentMusicState.current.regions];
  if (currentRegionsCopy.includes(region) && !isSelected) {
    currentRegionsCopy.splice(currentRegionsCopy.indexOf(region), 1);
  } else if (!currentRegionsCopy.includes(region) && isSelected) {
    currentRegionsCopy.push(region);
  }
  return {
    type: TOGGLE_MUSIC_REGION_SELECTED,
    payload: {
      music: {
        ...currentMusicState,
        current: { ...currentMusicState.current, regions: currentRegionsCopy },
        regions: { ...regionsCopy }
      }
    }
  };
};
