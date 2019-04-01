const db = require("../database/dbConfig");

module.exports = {
	create,
	find,
	findBy,
	findById
};

async function create(user) {
	const [id] = await db("users").insert(user);
	return findById(id);
}

function find() {
	return db("users").select("id", "username");
}

function findBy(filter) {
	return db("users").where(filter);
}

function findById(id) {
	return db("users")
		.where({ id })
		.first();
}
