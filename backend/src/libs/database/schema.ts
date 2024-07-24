import { integer, pgTable, serial, text, timestamp, pgEnum } from 'drizzle-orm/pg-core';

export const roleEnum = pgEnum('role_enum', ['admin', 'user']);

export const usersTable = pgTable('users_table', {
  id: serial('id').primaryKey(),
  username: text('username').notNull(),
  email: text('email').notNull().unique(),
  role: roleEnum('role').default('user'),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
