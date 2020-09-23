const Users = require("../data/dbconfig");

module.exports = {
    validateUserId,
    validateRegistration,
    validateLogin,
    validatePost
}

function validateUserId() {
    return async (req, res, next) => {
        try {
            const user = await Users.findById(req.token.id);

            if(user) {
                req.user = user;
            } else {
                res.status(404).json({
                    message: "User not found"
                })
            }
        } catch (err) { 
            next(err);
        }
    }
}

function validateRegistration() {
    return (req, res, next) => {
        const { username, password, email } = req.body;

        if(!(username && password && email)) {
            res.status(400).json({
                message: "Missing required fields"
            })
        } else {
            next();
        }
    }
}

function validateLogin() {
    return (req, res, next) => {
        const { username, password } = req.body;

        if (!(username && password)) {
            res.status(400).json({
                message: "Username and/or password missing"
            })
        } else {
            next();
        }
    }
}

function validatePost() {
    return (req, res, next) => {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "Missing required information"
            })
        }
    }
}