import createConnection from '../index';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcrypt';

async function create() {
  const id = uuidv4();
  const password = await hash('admin', 8);
  const connectionDefault = await createConnection('localhost');

  await connectionDefault.query(
    ` INSERT INTO USERS(id, name, email, password, isAdmin, created_At, driver_license)
    VALUES('${id}', 'admin', 'admin@rentx.com', '${password}', true, 'now()', 'xxxx-xxx' )
    `
  );

  await connectionDefault.close();
}

create().then(() => console.log('Seed Admin Created with Success ✔'));
