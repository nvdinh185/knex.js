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
    //   .createTable('JOB_TYPE', table => {
    //     table.increments('JOB_ID');
    //     table.string('JOB_NAME');
    //   });

    // await knex('JOB_TYPE').insert({ JOB_ID: '1', JOB_NAME: "NEW job 111" });
    // await knex('JOB_TYPE').insert({ JOB_NAME: "NEW job 222" });

    // await knex('JOB_TYPE').where('JOB_ID', '=', 11).update({ JOB_NAME: '111' });

    // await knex('JOB_TYPE').where('JOB_ID', '=', 12).del();

    const selectedRows = await knex("JOB_TYPE").select();
    // const selectedRows = await knex("JOB_TYPE").select().where('JOB_ID', '11');

    // map over the results
    const enrichedRows = selectedRows.map(row => ({ ...row }));
    console.log(enrichedRows);
  } catch (e) {
    console.error(e);
  }
})();