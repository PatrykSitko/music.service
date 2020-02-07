import React from "react";
import { connect } from "react-redux";
import Regions from "../components/list";
import toggleMusicRegionSelected from "../../redux/actions/toggle/music/region/selected";

const mapsStateToProps = ({ state: { music } }) => ({ music });
const mapDispatchToProps = dispatch => ({
  toggleMusicRegionSelected: (music, letter, region) =>
    dispatch(toggleMusicRegionSelected(music, letter, region))
});
function RegionsRoute({ music, toggleMusicRegionSelected }) {
  const { regions } = music;
  return (
    <div>
      <Regions
        sections={regions}
        onClick={async ({ letter, region }) =>
          toggleMusicRegionSelected(music, letter, region)
        }
      />
    </div>
  );
}

export default connect(mapsStateToProps, mapDispatchToProps)(RegionsRoute);
