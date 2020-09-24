const express = require("express");
const Renters = require("../renters/renters-model");

const router = express.Router();

//get renter
router.get("/", (req, res, next) => {
    try { 
        res.json(req.user);
    } catch (err) {
        next(err);
    }
})

//get rented items
router.get("/items", async (req, res, next) => {
    try {
        const items = await Renters.getItems(req.user.id);
        
        if(items.length === 0) {
            return res.status(204).json({
                message: "No rented items to show"
            })
        }
        res.json(items)

    } catch (err) {
        next(err);
    }
})
//add item to rented items list
router.post("/items/:id", async (req, res, next) => {
    try {
        const item = await Renters.isAvailable(req.params.id);

        if(item.isAvailable === 0 || false) {
            return res.status(409).json({
                message: "Item is currently unavailable for rent"
            })
        }
        const newItem = await Renters.add(req.user.id, req.params.id);
    } catch (err) { 
        next(err);
    }
})

module.exports = router;