import * as graphql from "@nestjs/graphql";
import { MenteeResolverBase } from "./base/mentee.resolver.base";
import { Mentee } from "./base/Mentee";
import { MenteeService } from "./mentee.service";

@graphql.Resolver(() => Mentee)
export class MenteeResolver extends MenteeResolverBase {
  constructor(protected readonly service: MenteeService) {
    super(service);
  }
}
