const express = require("express");
const Items = require("./items-model");

const router = express.Router();

//get items
router.get("/", async (req, res, next) => {
    try {
        const items = await Items.find();

        res.json(itemes)
    } catch (err) {
        next(err);
    }
})
//get single item
router.get("/:id", async (req, res, next) => {
    try {
        const item = await Items.findById(req.params.id);

        if(!item) {
            return res.status(404).json({
             message: "Item not found"
            })
        }
    res.json(item)
    } catch (err) {
        next(err)
    }
})

module.exports = router;