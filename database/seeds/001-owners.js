const bcrypt = require("bcryptjs");

const hash = bcrypt.hash("abc123", 10);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('owners').del()
    .then(function () {
      // Inserts seed entries
      return knex('owners').insert([
        {
          username: "bean", 
          password: hash,
          email: "blabla@gmail.com",
          name: "John Doe",
          city: "Los Angeles",
          state: "CA",
          is_owner: true
        },
        {
          username: "potate", 
          password: hash,
          email: "coolemail@gmail.com",
          name: "Jane Doe",
          city: "New York",
          state: "NY",
          is_owner: true
        },
        {
          username: "roll", 
          password: hash,
          email: "bread@gmail.com",
          name: "Baby Doe",
          city: "Santa Fe",
          state: "NM",
          is_owner: true
        }
      ]);
    });
};
