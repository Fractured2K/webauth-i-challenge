const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../models/Users");

// Create user
router.post("/register", async (req, res) => {
	try {
		let user = req.body;

        user.password = bcrypt.hashSync(user.password, 10);

        let newUser = await Users.create(user);
		res.status(201).json(newUser);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, but there was an error while registering"
		});
	}
});

// Login user
router.post("/login", async (req, res) => {
	try {
        let = { username, password } = req.body;

        const user = await Users.findBy({ username }).first()

        if(!user)
            return res.status(404).json({ message: "Sorry, but that user doesn't exist"})

        if (user && bcrypt.compareSync(password, user.password)) {
            req.session.user = user;

            return res.status(200).json({ message: `Welcome, ${user.username}`})
        }

        return res.status(401).json({ message: "Invalid credentials"})
    } catch (err) {
		res.status(500).json({
			message: "Sorry, but there was an error while logging in"
		});
	}
});

// Get all users
router.get('/users', async (req, res) => {
   try {
       const users = await Users.find()
       res.status(200).json(users)
   } catch (err) {
       res.status(500).json({message: "Sorry, but there was an error while retrieiving users"})
   }
})

module.exports = router;
