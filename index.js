const express = require("express");
const middleware = require("./middleware/config");

const server = express();

// middleware
middleware(server);

server.listen(5000, () =>
	console.log("Server is now listening on http://localhost:5000")
);
