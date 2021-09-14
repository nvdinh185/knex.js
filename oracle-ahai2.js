const oracledb = require('oracledb');

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

    let connection = await knex.client.acquireConnection();
    try {
      return await connection.execute(`BEGIN TEST_PR (:job_id,:job_name, :cursor); END;`,
        {
          job_id: 13, // Bind type is determined from the data.  Default direction is BIND_IN
          job_name: 'NEW job', // {val: 'NEW job', dir: oracledb.BIND_INOUT},
          cursor: { type: oracledb.CURSOR, dir: oracledb.BIND_OUT }
        }, async function (_, result) {

          const resultSet = result.outBinds.cursor;

          try {
            let arrayToReturn = [];
            let row;
            while ((row = await resultSet.getRow())) {
              arrayToReturn.push(row);
            }
            console.log(arrayToReturn);
          } catch (err) {
            console.log(err);
          }
        });
    } finally {
      knex.client.releaseConnection(connection);
    }

  } catch (e) {
    console.error(e);
  }
})();
