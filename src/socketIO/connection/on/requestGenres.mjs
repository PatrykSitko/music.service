export default client => {
  client.on("request-genres", ({ current, genres, letter }) => {
    console.log(current, genres, letter);
  });
};
