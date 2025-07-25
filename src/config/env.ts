import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string(),
  DIRECT_URL: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error(
    "Error validating environment variables:",
    z.treeifyError(_env.error)
  );
  process.exit(1);
}

export const env = _env.data;
