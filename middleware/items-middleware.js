const Items = require("../items/items-model");

module.exports = {
    validateItem,
    validateItemId
}

function validateItem() {
    return (req, res, next) => {
        const { name, price, description } = req.body;

        if (!(name && price && description)) {
            res.status(400).json({
                message: "Missing required fields"
            })
        } else {
            next();
        }
    }
}

function validateItemId() {
    return async (req, res, next) => {
        try {
            const item = await Items.findById(req.params.id);

            if(item) {
                req.item = item;
            } else {
                res.status(400).json({
                    message: "Item does not exist"
                })
            }
        } catch (err){
            next(err)
        }
    }
}