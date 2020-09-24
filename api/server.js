const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const ownerRouter = require("../owners/owners-router");

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());



server.get("/", (req, res) => {
    res.json({
        message: "server is live"
    })
});

server.use("/api/owners", ownerRouter);

module.exports = server;