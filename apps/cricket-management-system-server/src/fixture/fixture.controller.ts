import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FixtureService } from "./fixture.service";
import { FixtureControllerBase } from "./base/fixture.controller.base";

@swagger.ApiTags("fixtures")
@common.Controller("fixtures")
export class FixtureController extends FixtureControllerBase {
  constructor(protected readonly service: FixtureService) {
    super(service);
  }
}
