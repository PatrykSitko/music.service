export default (options = []) => {
  const result = {};
  options.forEach(option => (result[option] = option));
  return result;
};
