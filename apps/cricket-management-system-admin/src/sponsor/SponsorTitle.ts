import { Sponsor as TSponsor } from "../api/sponsor/Sponsor";

export const SPONSOR_TITLE_FIELD = "id";

export const SponsorTitle = (record: TSponsor): string => {
  return record.id?.toString() || String(record.id);
};
