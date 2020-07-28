
const bcrpyt = require('bcryptjs');


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'user', password: bcrpyt.hashSync('password', 8)},
      ]);
    });
};
