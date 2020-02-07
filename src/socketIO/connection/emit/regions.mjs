import selectRegions from "../../../mySQL/select/regions";

export default async client => {
  const regions = {};
  (await selectRegions()).forEach(({ region }) => {
    const letter = region.slice(0, 1).toLowerCase();
    if (typeof regions[letter] !== "object") {
      regions[letter] = [];
    }
    regions[letter].push({
      title: region,
      image: `http://localhost:9000/region/${region}`,
      region,
      selected: false
    });
  });
  client.emit("regions", regions);
};
