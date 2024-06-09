import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FixtureServiceBase } from "./base/fixture.service.base";

@Injectable()
export class FixtureService extends FixtureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
