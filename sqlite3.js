const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './mydb.db',
  },
  useNullAsDefault: true
});

(async () => {
  try {
    // Create a table
    // await knex.schema
    //   .createTable('users1', table => {
    //     table.increments('id');
    //     table.string('username');
    //     table.string('password');
    //   });

    // Then query the table...
    await knex('users1').insert({ username: 'Tim', password: 123 });

    // Query both of the rows.
    const selectedRows = await knex('users1').select('username', 'password');

    // map over the results
    const enrichedRows = selectedRows.map(row => ({ ...row }));
    console.log(enrichedRows);
    knex.destroy();
  } catch (e) {
    console.error(e);
  }
})();