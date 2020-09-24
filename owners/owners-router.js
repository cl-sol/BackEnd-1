const express = require("express");
const Owners = require("./owners-model");

const router = express.Router();

//get owner
router.get("/", (req, res, next) => {
    try {
        res.json(req.user);
    } catch (err){
        next(err);
    }
});

//get listings
router.get("/items", async (req, res, next) => {
    try {
        const items = await Owners.getItems(req.user.id);
        
        if(items.length === 0) {
            return res.json({
                message: "No current listings"
            })
        }
        res.json(items)

    } catch (err) {
        next(err);
    }
})

//get single listing
router.get("/items/:id", async (req, res, next) => {
    try {
        res.status(200).json(req.item);
    } catch (err) {
        next(err);
    }
})

//add listing
router.post("/items", async (req, res, next) => {
    try {
        const { name, price, description } = req.body;
        const newListing = await Owners.add({
            name,
            price,
            description,
            owner_id: req.user.id
        });

        res.status(201).json(newListing);
    } catch (err) {
        next(err);
    }
})

//update listing
router.put("/items/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedListing = await Owners.update(id, updates);

        res.json(updatedListing);
    } catch (err) {
        next(err);
    }
})

//delete listing
router.delete("/items/:id", async (req, res, next) => {
    try {
        const count = await Owners.remove(req.params.id);

        res.json({message: `item successfully deleted. ${count}`})
    } catch (err) {
        next(err);
    }
})

module.exports = router;

// function validateToken() {
//     return async (req, res, next) => {
//         try {
//             const user = await Us
//         } catch {
//             dsfjasdfjlasjdfljasldkfja
//         }
//     }
// }