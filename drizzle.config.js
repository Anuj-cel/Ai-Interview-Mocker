import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  out: "./drizzle",
   dbCredentials: {
    url:'postgresql://ai-mocker_owner:npg_w5kKAR7HJzBb@ep-lucky-lab-a8246gze-pooler.eastus2.azure.neon.tech/ai-mocker?sslmode=require',
  },
});