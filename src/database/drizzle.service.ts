import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { CONNECTION_POOL } from 'src/database/database.module-definition';
import { databaseSchema } from './database-schema';

@Injectable()
export class DrizzleService {
  public db: NodePgDatabase<typeof databaseSchema>;
  constructor(@Inject(CONNECTION_POOL) private readonly pool: Pool) {
    this.db = drizzle(this.pool, { schema: databaseSchema });
  }
}
