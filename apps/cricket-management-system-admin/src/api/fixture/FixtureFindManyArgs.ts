import { FixtureWhereInput } from "./FixtureWhereInput";
import { FixtureOrderByInput } from "./FixtureOrderByInput";

export type FixtureFindManyArgs = {
  where?: FixtureWhereInput;
  orderBy?: Array<FixtureOrderByInput>;
  skip?: number;
  take?: number;
};
