const db = require("../data/dbconfig");

module.exports = {
    findById,
    findUser,
    add
}

function findById(id) {
    return db("users")
        .where({ id })
        .first();
}

function findUser(username) {
    return db("users")
        .select("id", "username", "password", "is_Owner")
        .where(username)
        .first();
}

function add(newUser) {
    return db("users")
        .insert(newUser, "id")
        .then(id => findById(id))
}