import { db } from './index.js';
import { InsertUser, usersTable } from './schema';

export async function createUser(data: InsertUser) {
  await db.insert(usersTable).values(data).then((val) => {
    console.log("New User created !\n");
    console.log(val);
  });
}


createUser({
  username: "Andrew LC",
  email: "smartandrew2003@gmail.com",
  role: "admin"
});
