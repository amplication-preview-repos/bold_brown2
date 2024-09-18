import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ModsServiceBase } from "./base/mods.service.base";

@Injectable()
export class ModsService extends ModsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
