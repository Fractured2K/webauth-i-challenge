exports.up = function(knex) {
	return knex.schema.createTable("users", tbl => {
		// id
		tbl.increments();

		// username
		tbl.string("username", 255)
			.notNullable()
			.unique();

		// password
		tbl.string("password", 255).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("users");
};
