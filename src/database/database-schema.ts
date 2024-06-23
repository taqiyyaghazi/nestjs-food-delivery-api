import {
  boolean,
  integer,
  pgTable,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: varchar('id').primaryKey().unique(),
  name: varchar('name').notNull(),
  email: varchar('email').unique().notNull(),
  emailVerifiedAt: timestamp('email_verified_at'),
  password: varchar('password').notNull(),
  phone: varchar('phone').notNull(),
  restaurantName: varchar('restaurant_name'),
  restaurantAddress: varchar('restaurant_address'),
  latlong: varchar('latlong'),
  licensePlate: varchar('license_plate'),
  photo: varchar('photo'),
  role: varchar('role'),
  rememberToken: varchar('remember_token'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').$onUpdate(() => new Date()),
});

export const products = pgTable('products', {
  id: varchar('id').primaryKey().unique(),
  name: varchar('name').notNull(),
  description: varchar('description'),
  price: integer('price'),
  stock: integer('stock'),
  isAvailable: boolean('is_available'),
  isFavorite: boolean('is_favorite'),
  image: varchar('image'),
  userId: varchar('userId').references(() => users.id),
});

export const databaseSchema = {
  users,
  products,
};
