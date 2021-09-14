const knex = require('knex')({
  client: 'oracledb',
  connection: {
    host: '10.151.59.59',
    user: 'LABOR_EXP_OWNER_WEB',
    password: 'labor_exp',
    database: 'SERV',
  },
  useNullAsDefault: true
});

(async () => {
  try {

    // Create a table
    // await knex.schema
    //   .createTable('dinhtest', table => {
    //     table.increments('id');
    //     table.string('username');
    //   });

    // // Then query the table...
    // await knex('dinhtest').insert({ username: 'Tim' });

    // const selectedRows = await knex("JOB_TYPE").select("JOB_ID");
    // const selectedRows = await knex("LABOR_EXP_OWNER.JOB_TYPE").select("JOB_ID", "JOB_NAME");
    // const selectedRows = await knex("LABOR_EXP_OWNER.JOB_TYPE").select();
    const selectedRows = await knex("JOB_TYPE").select();

    // map over the results
    const enrichedRows = selectedRows.map(row => ({ ...row }));
    console.log(enrichedRows);
  } catch (e) {
    console.error(e);
  }
})();