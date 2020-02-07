import RandExp from "randexp";

const randExp = new RandExp("[0-9]{64}");
export default () => randExp.gen();
