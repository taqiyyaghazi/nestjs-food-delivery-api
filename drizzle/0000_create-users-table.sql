CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"email_verified_at" timestamp,
	"password" varchar NOT NULL,
	"phone" varchar NOT NULL,
	"restaurant_name" varchar,
	"restaurant_address" varchar,
	"latlong" varchar,
	"license_plate" varchar,
	"photo" varchar,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp,
	CONSTRAINT "users_id_unique" UNIQUE("id"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
