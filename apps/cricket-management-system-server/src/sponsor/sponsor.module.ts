import { Module } from "@nestjs/common";
import { SponsorModuleBase } from "./base/sponsor.module.base";
import { SponsorService } from "./sponsor.service";
import { SponsorController } from "./sponsor.controller";
import { SponsorResolver } from "./sponsor.resolver";

@Module({
  imports: [SponsorModuleBase],
  controllers: [SponsorController],
  providers: [SponsorService, SponsorResolver],
  exports: [SponsorService],
})
export class SponsorModule {}
