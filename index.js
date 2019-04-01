const express = require("express");

const server = express();

server.listen(5000, () =>
	console.log("Server is now listening on http://localhost:5000")
);
