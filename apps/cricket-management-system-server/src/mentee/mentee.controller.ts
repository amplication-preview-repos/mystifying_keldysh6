import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MenteeService } from "./mentee.service";
import { MenteeControllerBase } from "./base/mentee.controller.base";

@swagger.ApiTags("mentees")
@common.Controller("mentees")
export class MenteeController extends MenteeControllerBase {
  constructor(protected readonly service: MenteeService) {
    super(service);
  }
}
