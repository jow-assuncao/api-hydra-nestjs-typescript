import { startHttpServer } from "@/app/http";

export async function bootstrap() {
  await startHttpServer();
}
