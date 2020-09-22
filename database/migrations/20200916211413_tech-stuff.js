
exports.up = function(knex) {
  return knex.schema
    .createTable("owners", tbl => {
        tbl.increments();
        tbl.string("username", 255)
            .notNullable()
            .unique();
        tbl.string("password", 255)
            .notNullable();
        tbl.string("email", 255)
            .notNullable()
            .unique();
        tbl.string("name", 255)
            .notNullable();
        tbl.string("city", 255)
            .notNullable();
        tbl.string("state", 255)
            .notNullable();
        tbl.string("phone", 255)
        tbl.boolean("is_owner")
            .defaultTo(true);
    })
        .createTable("renters", tbl => {
            tbl.string("username", 255)
                .notNullable()
                .unique();
            tbl.string("password", 255)
                .notNullable();
            tbl.string("email", 255)
                .notNullable()
                .unique();
            tbl.string("name", 255)
                .notNullable();
            tbl.string("city", 255)
            tbl.string("state", 255)
            tbl.boolean("is_owner")
                .defaultTo(false);
        })
        .createTable("items", tbl => {
            tbl.increments();
            tbl.string("name", 255)
                .notNullable();
            tbl.decimal("price", 14, 2)
                .notNullable();
            tbl.string("description", 255)
                .notNullable();
            tbl.boolean("is_available")
                .defaultTo(true);
            tbl.integer("owner_id")
                .references("owners.id")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })
        .createTable("renter_item", tbl => {
            tbl.integer("renter_id")
                .references("renters.id")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            tbl.integer("item_id")
                .references("items.id")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("renter_item")
    .dropTableIfExists("items")
    .dropTableIfExists("renters")
    .dropTableIfExists("owners");
};
