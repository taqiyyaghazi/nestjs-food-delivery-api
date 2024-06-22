ALTER TABLE "users" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "password" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "phone" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "restaurant_name" varchar;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "restaurant_address" varchar;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "latlong" varchar;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "photo" varchar;