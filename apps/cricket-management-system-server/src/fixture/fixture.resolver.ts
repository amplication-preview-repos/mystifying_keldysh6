import * as graphql from "@nestjs/graphql";
import { FixtureResolverBase } from "./base/fixture.resolver.base";
import { Fixture } from "./base/Fixture";
import { FixtureService } from "./fixture.service";

@graphql.Resolver(() => Fixture)
export class FixtureResolver extends FixtureResolverBase {
  constructor(protected readonly service: FixtureService) {
    super(service);
  }
}
