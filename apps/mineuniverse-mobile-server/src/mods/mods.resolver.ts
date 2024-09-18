import * as graphql from "@nestjs/graphql";
import { ModsResolverBase } from "./base/mods.resolver.base";
import { Mods } from "./base/Mods";
import { ModsService } from "./mods.service";

@graphql.Resolver(() => Mods)
export class ModsResolver extends ModsResolverBase {
  constructor(protected readonly service: ModsService) {
    super(service);
  }
}
