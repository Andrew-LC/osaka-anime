// auth.ts
import { supabase } from './index';
import { db } from '../database/index';
import { usersTable, InsertUser } from '../database/schema';

type User = {
  email: string;
  password: string;
  username: string;
  fullname: string;
  role: 'admin' | 'user'; // Make sure role matches the enum definition
  organization: string;
}

export async function signUp(newUser: User) {
  const { email, password, username, fullname, role, organization } = newUser;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  const userId = data?.user?.id || ''; // Ensure user id is available

  const newUserRecord: InsertUser = {
    id: userId,
    username,
    fullname,
    role,
    organization,
  };

  await db.insert(usersTable).values(newUserRecord).execute();

  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return data;
}
