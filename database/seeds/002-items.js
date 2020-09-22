
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {
          name: "nintendo switch", 
          price: 275,
          description: "animal crossing version of the nintendo switch. power cord, hdmi and dock included.",
          is_available: false,
          owner_id: 1
        },
        {
          name: "banjo", 
          price: 75,
          description: "used 5-string banjo. picks and capo included.",
          is_available: true,
          owner_id: 2
        },
        {
          name: "himalayan salt lamp", 
          price: 45,
          description: "emits beautiful glow",
          is_available: true,
          owner_id: 2
        },
        {
          name: "collection of albums", 
          price: 200,
          description: "four classic afrobeat vinyl albums, all in great condition",
          is_available: true,
          owner_id: 3
        },
      ]);
    });
};
