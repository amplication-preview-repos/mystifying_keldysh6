import { Module } from "@nestjs/common";
import { MenteeModuleBase } from "./base/mentee.module.base";
import { MenteeService } from "./mentee.service";
import { MenteeController } from "./mentee.controller";
import { MenteeResolver } from "./mentee.resolver";

@Module({
  imports: [MenteeModuleBase],
  controllers: [MenteeController],
  providers: [MenteeService, MenteeResolver],
  exports: [MenteeService],
})
export class MenteeModule {}
