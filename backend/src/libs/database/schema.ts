import { pgTable, pgEnum, varchar, text, timestamp, uuid } from 'drizzle-orm/pg-core';

// Define the role enum
const roleEnum = pgEnum('role_enum', ['admin', 'user']);

// Define the users table
export const usersTable = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  username: varchar('username').unique().notNull(),
  fullname: text('fullname').notNull(),
  role: roleEnum('role').notNull(),
  organization: text('organization').notNull().default("none"),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Define the InsertUser and SelectUser <t></t>ypes
export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
