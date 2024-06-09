/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Sponsor } from "./Sponsor";
import { SponsorCountArgs } from "./SponsorCountArgs";
import { SponsorFindManyArgs } from "./SponsorFindManyArgs";
import { SponsorFindUniqueArgs } from "./SponsorFindUniqueArgs";
import { DeleteSponsorArgs } from "./DeleteSponsorArgs";
import { SponsorService } from "../sponsor.service";
@graphql.Resolver(() => Sponsor)
export class SponsorResolverBase {
  constructor(protected readonly service: SponsorService) {}

  async _sponsorsMeta(
    @graphql.Args() args: SponsorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Sponsor])
  async sponsors(
    @graphql.Args() args: SponsorFindManyArgs
  ): Promise<Sponsor[]> {
    return this.service.sponsors(args);
  }

  @graphql.Query(() => Sponsor, { nullable: true })
  async sponsor(
    @graphql.Args() args: SponsorFindUniqueArgs
  ): Promise<Sponsor | null> {
    const result = await this.service.sponsor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Sponsor)
  async deleteSponsor(
    @graphql.Args() args: DeleteSponsorArgs
  ): Promise<Sponsor | null> {
    try {
      return await this.service.deleteSponsor(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
