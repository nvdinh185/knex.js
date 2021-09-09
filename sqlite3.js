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
    //   });

    // Then query the table...
    await knex('users1').insert({ username: 'Tim' });

    // Query both of the rows.
    const selectedRows = await knex('users1').select('username');

    // map over the results
    const enrichedRows = selectedRows.map(row => ({ ...row }));
    console.log(enrichedRows);
  } catch (e) {
    console.error(e);
  }
})();