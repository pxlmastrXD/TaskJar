import { Client } from 'pg';

const sql = new Client()

const client = new Client({
    connectionString: 'postgresql://postgres:@zw#J@BL7ZK7g&6@db.saiqmuffyffcigmisyxa.supabase.co:5432/postgres',
    ssl: {
      rejectUnauthorized: false // Required for Supabase's SSL setup
    }
  });

export default client;