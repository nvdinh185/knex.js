import { Knex, knex } from 'knex';

interface User {
  id: number;
  age: number;
  name: string;
  active: boolean;
  departmentId: number;
}

const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: './data.db',
  },
  useNullAsDefault: true
};

const knexInstance = knex(config);
// console.log(knexInstance);

(async () => {
  try {
    const users = await knex<User>('users').select('id', 'age');
    console.log(users);

  } catch (err) {
    console.log("Lỗi: ", err);
  }
})();