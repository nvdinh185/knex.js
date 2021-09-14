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

    await knex('JOB_TYPE').insert({ JOB_ID: '11', JOB_NAME: "NEW job 123" });

    const selectedRows = await knex("JOB_TYPE").select();

    // map over the results
    const enrichedRows = selectedRows.map(row => ({ ...row }));
    console.log(enrichedRows);
  } catch (e) {
    console.error(e);
  }
})();