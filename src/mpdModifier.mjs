import fs from "./customFS.mjs";
import parser from "fast-xml-parser";
const jsparser = parser.j2xParser();
function readXMLSync(path, encoding = "UTF-8", xmlOptions) {
  try {
    const xmlData = fs.readFileSync(path, encoding);
    if (parser.validate(xmlData, xmlOptions)) {
      return parser.parse(xmlData, xmlOptions);
    } else {
      return undefined;
    }
  } catch (e) {
    console.error(e);
  }
}

export default class MpdModifier {
  constructor(mpdFile, encoding = "UTF-8", xmlOptions) {
    this.mpdFile = mpdFile;
    this.encoding = encoding;
    this.xmlOptions = xmlOptions;
    this.mpdData = undefined;
    this.mpdData = fs.readXMLSync(mpdFile, encoding, xmlOptions);
  }
  get data() {
    return this.mpdData;
  }
  save() {}
}
function saveXML(jsonData, path, encoding = "UTF-8", xmlOptions) {
  return function() {
    fs.write();
  };
}
const mpdDATA = new MpdModifier("res\\movies\\anime\\manifests\\naruto.mpd");
console.log(mpdDATA.data);
console.log(new parser.j2xParser().parse(mpdDATA.data));
// parseXML()
//   .then(entry =>
//     console.log(
//       entry["MPD"]["Period"]["AdaptationSet"][0]["Representation"][0].BaseURL
//     )
//   )
//   .catch(e => console.error(e));
