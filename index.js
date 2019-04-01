const express = require("express");
const middleware = require("./middleware/config");

// controllers
const userController = require("./controllers/users");

const server = express();

// middleware
middleware(server);

// route handlers
server.use("/api/users", userController);

server.listen(5000, () =>
	console.log("Server is now listening on http://localhost:5000")
);
