const db = require("../data/dbconfig");

module.exports = {
    findById,
    getItem,
    add,
    isAvailable
}

function findById(id) {
    return db("items")
        .where({ id })
        .first();
};

//????? unsure 
function getItem(renter_id) {
    return db("renter_item")
        .join("users as u", "u.id", "renter_item.renter_id")
        .join("items as i", "i.id", "renter_item.item_id")
        .where("u.id", "renter_id")
        .select(i)
};
//???? test later
function add(user, item) {
    return db("renter_item")
        .insert({ renter_id: user, item_Id: item })
        .then((id) => {
            return db("items")
                .where({ id: itemId })
                .update({ isAvailable: false })
        });
};

function isAvailable(id) {
    return db("items")
        .where({ id })
        .first();
};