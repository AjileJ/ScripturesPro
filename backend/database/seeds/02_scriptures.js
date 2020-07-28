exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('scriptures').del()
    .then(function () {
      // Inserts seed entries
      return knex('scriptures').insert([
        {book: 'John', chapter: '3',verse: "16", user_id: 1},
        {book: 'Matthew', chapter: '25',verse: "23", user_id: 1},     
      ]);
    });
};
