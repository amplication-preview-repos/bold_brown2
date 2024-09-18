import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ModsService } from "./mods.service";
import { ModsControllerBase } from "./base/mods.controller.base";

@swagger.ApiTags("mods")
@common.Controller("mods")
export class ModsController extends ModsControllerBase {
  constructor(protected readonly service: ModsService) {
    super(service);
  }
}
