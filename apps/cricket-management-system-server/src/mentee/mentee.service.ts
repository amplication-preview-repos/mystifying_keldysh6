import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MenteeServiceBase } from "./base/mentee.service.base";

@Injectable()
export class MenteeService extends MenteeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
