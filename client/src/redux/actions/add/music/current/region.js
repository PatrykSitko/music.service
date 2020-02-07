import { CURRENT_REGION } from "../../../types";

export default (currentMusicState, region) => ({
  type: CURRENT_REGION,
  payload: {
    music: {
      ...currentMusicState,
      current: {
        ...currentMusicState.current,
        regions: currentMusicState.current.regions.includes(region)
          ? [...currentMusicState.current.regions]
          : [...currentMusicState.current.regions, region]
      }
    }
  }
});
