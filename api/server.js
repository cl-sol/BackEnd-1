const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const ownerRouter = require("../owners/owners-router");
const renterRouter = require("../renters/renters-router");
const itemsRouter = require("../items/items-router");

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
server.use("/api/renter", renterRouter);
server.use("/api/items", itemsRouter);

module.exports = server;