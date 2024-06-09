import { Module } from "@nestjs/common";
import { DonationModuleBase } from "./base/donation.module.base";
import { DonationService } from "./donation.service";
import { DonationController } from "./donation.controller";
import { DonationResolver } from "./donation.resolver";

@Module({
  imports: [DonationModuleBase],
  controllers: [DonationController],
  providers: [DonationService, DonationResolver],
  exports: [DonationService],
})
export class DonationModule {}
