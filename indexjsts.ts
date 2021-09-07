import { Knex, knex } from 'knex';

interface User {
  id: number;
  user_name: string;
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
    const users = await knex<User>('users').select('id', 'user_name');
    console.log(users);

  } catch (err) {
    console.log("Lỗi: ", err);
  }
})();