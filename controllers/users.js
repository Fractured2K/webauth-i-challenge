const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../models/Users");

// Create user
router.post("/register", (req, res) => {
	try {
		let user = req.body;

		user.password = bcrypt.hashSync(user.password, 10);

		let newUser = Users.create(user);
		res.status(201).json(newUser);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, but there was an error while registering"
		});
	}
});

module.exports = router;
