const db = require("../data/dbconfig");

module.exports = {
    find,
    findById
}

function find() {
    return db("items")
        .orderBy("id");
};

function findById(id) {
    return db("items")
        .where({ id })
        .first();
};