import { Module } from "@nestjs/common";
import { ModsModuleBase } from "./base/mods.module.base";
import { ModsService } from "./mods.service";
import { ModsController } from "./mods.controller";
import { ModsResolver } from "./mods.resolver";

@Module({
  imports: [ModsModuleBase],
  controllers: [ModsController],
  providers: [ModsService, ModsResolver],
  exports: [ModsService],
})
export class ModsModule {}
