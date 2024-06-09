import { Mentee as TMentee } from "../api/mentee/Mentee";

export const MENTEE_TITLE_FIELD = "id";

export const MenteeTitle = (record: TMentee): string => {
  return record.id?.toString() || String(record.id);
};
