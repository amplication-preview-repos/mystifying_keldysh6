import * as graphql from "@nestjs/graphql";
import { DonationResolverBase } from "./base/donation.resolver.base";
import { Donation } from "./base/Donation";
import { DonationService } from "./donation.service";

@graphql.Resolver(() => Donation)
export class DonationResolver extends DonationResolverBase {
  constructor(protected readonly service: DonationService) {
    super(service);
  }
}
