import connection from "../connection.mjs";

export default query => {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) =>
      error ? reject(error) : resolve(results)
    );
  });
};
