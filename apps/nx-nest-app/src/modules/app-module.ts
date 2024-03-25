import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma";
import { CardModule } from "./card";
import { ListModule } from "./list";

@Module({
  imports: [PrismaModule, CardModule, ListModule],
})
export class AppModule {}
