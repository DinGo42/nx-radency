import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { config } from "dotenv";
import { AppModule } from "./modules/app-module";
import { ErrorMiddleware } from "@/shared/api";

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = "api";

  app.setGlobalPrefix(globalPrefix);
  app.use(ErrorMiddleware);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
