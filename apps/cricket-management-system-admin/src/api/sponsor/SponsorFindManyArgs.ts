import { SponsorWhereInput } from "./SponsorWhereInput";
import { SponsorOrderByInput } from "./SponsorOrderByInput";

export type SponsorFindManyArgs = {
  where?: SponsorWhereInput;
  orderBy?: Array<SponsorOrderByInput>;
  skip?: number;
  take?: number;
};
