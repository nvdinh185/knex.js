const knex = require('knex')({
  client: 'oracledb',
  connection: {
    host: '10.151.59.59',
    user: 'LABOR_EXP_OWNER_WEB',
    password: 'labor_exp',
    database: 'pkg_web',
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
    // await knex('users1').insert({ username: 'Tim' });

    // Query both of the rows.
    const selectedRows = await knex('users').select('username');

    // map over the results
    const enrichedRows = selectedRows.map(row => ({ ...row }));
    console.log(enrichedRows);
  } catch (e) {
    console.error(e);
  }
})();