import { Fixture as TFixture } from "../api/fixture/Fixture";

export const FIXTURE_TITLE_FIELD = "id";

export const FixtureTitle = (record: TFixture): string => {
  return record.id?.toString() || String(record.id);
};
