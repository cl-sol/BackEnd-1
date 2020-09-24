const db = require("../data/dbconfig");

module.exports = {
    findById,
    getItems,
    add,
    update,
    remove
}

function findById(id) {
    return db("users")
        .where({ id })
        .first();
};

function getItems(owner_id) {
    return db("items")
        .where({ owner_id });
};

function add(item) {
    return db("items")
        .insert(item)
        .then(id => {
            return findById(id)
        });
};

function update(id, updates) {
    return db("items")
        .where({ id })
        .update(updates);
};

function remove(id) {
    return db("items")
        .where("id", id)
        .del();
};