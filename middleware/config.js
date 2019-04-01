const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("morgan");
const bodyParser = require("body-parser");

module.exports = server => {
	server.use(express.json());
	server.use(bodyParser.json());
	server.use(helmet);
	server.use(morgan("combined"));
	server.use(helmet());
	server.use(cors());
};
