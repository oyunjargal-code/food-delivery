import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: "ac2d98a5c439b0d3b01a9c3a90936beb",
    databaseId: "96f81129-fb48-479b-9e77-9ae10a9b4489",
    token: "bq-kQ4HFzl1jrh4Gp8lBl64ILur4W1LZuff8hVx_",
  },
});
