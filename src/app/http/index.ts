import { env } from "@/config/env";
import express, { Request, Response } from "express";

export async function startHttpServer() {
  const app = express();
  app.use(express.json());

  app.get("/", (req: Request, res: Response) => {
    res.send("Hydra API with Express JS");
  });

  const PORT = env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(
      `Hydra server is running... Port: ${PORT}/Environment: ${env.NODE_ENV}`
    );
  });
}
