import type { Config } from "drizzle-kit";

export default {
    schema: "./src/db/schema.ts",
    driver: "turso",
    dbCredentials: {
      url: "libsql://common-place-garrett-in-development.turso.io",
      authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTQ2MjY3NTQsImlkIjoiNTY0OTNmYjctNTI1Yy0xMWVlLThiM2YtM2FlOGIzNmNjODlkIn0.7l26UZzlhxCFGjx5W_Qvv3okX7nIEIva7LQfVtoUi99UwqfN3xDGCx50_1R1eMJ-VRlu0eda9AVxhAXqVti3BA",
    },
    verbose: true,
    strict: true
} satisfies Config;
