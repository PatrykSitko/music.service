#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from "../app.mjs";
import debugLib from "debug";
import http from "http";
import socketIO from "socket.io";
import socketIOConnections from "../src/socketIO/connections.mjs";
import mySQL from "mysql";
const debug = debugLib("streaming.service:server");

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || "9000");
app.set("port", port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);
export const io = socketIO(server);
export const mySQLConnection = (() => {
  const connection = mySQL.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "music_player"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected with MySQL music_player database.");
  });
  return connection;
})();

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
  console.log("http://localhost:" + port);
  socketIOConnections.connect();
}
