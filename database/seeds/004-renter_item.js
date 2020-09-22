
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('renter_item').del()
    .then(function () {
      // Inserts seed entries
      return knex('renter_item').insert([
        {renter_id: 1, item_id: 2},
        {renter_id: 2, item_id: 4},
        {renter_id: 3, item_id: 3}
      ]);
    });
};
