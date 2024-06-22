import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: varchar('id').primaryKey().unique(),
  name: varchar('name').notNull(),
  email: varchar('email').unique().notNull(),
  email_verified_at: timestamp('email_verified_at'),
  password: varchar('password').notNull(),
  phone: varchar('phone').notNull(),
  restaurant_name: varchar('restaurant_name'),
  restaurant_address: varchar('restaurant_address'),
  latlong: varchar('latlong'),
  license_plate: varchar('license_plate'),
  photo: varchar('photo'),
  role: varchar('role'),
  remember_token: varchar('remember_token'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').$onUpdate(() => new Date()),
});

export const databaseSchema = {
  users,
};
