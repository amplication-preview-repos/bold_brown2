import { Mods as TMods } from "../api/mods/Mods";

export const MODS_TITLE_FIELD = "name";

export const ModsTitle = (record: TMods): string => {
  return record.name?.toString() || String(record.id);
};
