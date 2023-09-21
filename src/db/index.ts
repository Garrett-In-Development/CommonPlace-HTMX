import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
require('isomorphic-fetch');

const client = createClient({
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN,
    fetch: fetch,
});

export const db = drizzle(client, {logger: true});
