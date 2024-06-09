import * as graphql from "@nestjs/graphql";
import { SponsorResolverBase } from "./base/sponsor.resolver.base";
import { Sponsor } from "./base/Sponsor";
import { SponsorService } from "./sponsor.service";

@graphql.Resolver(() => Sponsor)
export class SponsorResolver extends SponsorResolverBase {
  constructor(protected readonly service: SponsorService) {
    super(service);
  }
}
