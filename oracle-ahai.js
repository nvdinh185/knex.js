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

    knex.raw(`BEGIN TEST_PR (:job_id,:job_name, :o_result); END;`,
      {
        job_id: 4, // Bind type is determined from the data.  Default direction is BIND_IN
        job_name: 'NEW job 444', // {val: 'NEW job', dir: oracledb.BIND_INOUT},
        o_result: { type: oracledb.CURSOR, dir: oracledb.BIND_OUT }
      })
      .then(async (result) => {
        const rs = result[0];
        try {
          let resultObj = [];
          let row;
          while ((row = await rs.getRow())) {
            resultObj.push(row);
          }
          console.log(resultObj);
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });

  } catch (e) {
    console.error(e);
  }
})();
