
exports.up = function(knex) {
    return knex.schema.createTable('scriptures', scriptures => {
        scriptures.increments()
        scriptures.string('book')
            .notNullable()
        scriptures.string('chapter')
            .notNullable()
        scriptures.string('verse')
            .notNullable()
        scriptures.string('passage')
            .notNullable()
        scriptures.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
        
    })


  
};

exports.down = function(knex) {
    knex.string.dropTable('scriptures')
  
};
