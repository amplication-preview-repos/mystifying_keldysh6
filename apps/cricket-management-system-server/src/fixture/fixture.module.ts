import { Module } from "@nestjs/common";
import { FixtureModuleBase } from "./base/fixture.module.base";
import { FixtureService } from "./fixture.service";
import { FixtureController } from "./fixture.controller";
import { FixtureResolver } from "./fixture.resolver";

@Module({
  imports: [FixtureModuleBase],
  controllers: [FixtureController],
  providers: [FixtureService, FixtureResolver],
  exports: [FixtureService],
})
export class FixtureModule {}
