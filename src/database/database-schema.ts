import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: varchar('id').primaryKey().unique(),
  name: varchar('name'),
  email: varchar('email').unique(),
  email_verified_at: timestamp('email_verified_at'),
  password: varchar('password'),
  phone: varchar('phone'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').$onUpdate(() => new Date()),
});

export const databaseSchema = {
  users,
};
