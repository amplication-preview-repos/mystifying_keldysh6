import { MenteeWhereInput } from "./MenteeWhereInput";
import { MenteeOrderByInput } from "./MenteeOrderByInput";

export type MenteeFindManyArgs = {
  where?: MenteeWhereInput;
  orderBy?: Array<MenteeOrderByInput>;
  skip?: number;
  take?: number;
};
