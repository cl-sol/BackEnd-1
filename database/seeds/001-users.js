const bcrypt = require("bcryptjs");

const hash = bcrypt.hash("abc123", 10);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
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
        },
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
    ])
  })
};
