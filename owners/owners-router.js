const express = require("express");
const Owners = require("./owners-model");

const router = express.Router();

router.get("/", (req, res, next) => {
    try {
        res.json({
            data: req.user
        });
    } catch (err){
        next(err);
    }
});

router.get("/items", (req, res, next) => {
    try {
        const items = await Owners.getItems(req.user.id);
        
        if(items.length === 0) {
            return res.json({
                message: "No current listings"
            })
        }
        //res.json({ data: items }) ?????
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