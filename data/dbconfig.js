const knex = require("knex");
const config = require("../knexfile");

const dbEnv = process.env.DB_ENV || 'developtment';

module.exports = knex(config.development);