const jwt = require("jsonwebtoken");
const secret = require("../config/secrets");

const ownerError = {
    message: "You do not have the rights to perform this operation"
}

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if(!token) {
            return res.status(401).json(ownerError)
        }

        jwt.verify(token, secret.jwtSecret, (err, decodedToken))

        if(err) {
            return res.status(401).json(ownerError)
        }
        req.token = decodedToken;

        if(decoded.is_owner === 1) {
            return res.status(401).json(ownerError);
        }
    } catch (err) {
        next(err);
    }
}