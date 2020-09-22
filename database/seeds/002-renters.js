const brcrypt = require("bcryptjs");

const hash = brcrypt.hash("abc123", 10);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('renters').del()
    .then(function () {
      // Inserts seed entries
      return knex('renters').insert([
        {
          username: "turtle", 
          password: hash,
          email: "fakeemail@gmail.com",
          name: "Jimmy Doe",
          city: "Richmond",
          state: "VA",
          is_owner: false
      },
        {
          username: "raccoondog", 
          password: hash,
          email: "trasheater@gmail.com",
          name: "Johnny Doe",
          city: "Pittsburgh",
          state: "PA",
          is_owner: false
      },
        {
          username: "numtot", 
          password: hash,
          email: "nocarsnomasters@gmail.com",
          name: "Pixie Doe",
          city: "Chicago",
          state: "IL",
          is_owner: false
      }
      ]);
    });
};
