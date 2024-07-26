import { db } from './index.js';
import { InsertUser, usersTable } from './schema';

export async function createUser(data: InsertUser) {
  await db.insert(usersTable).values(data).then((_) => {
    console.log("New User created !\n");
  });
}
