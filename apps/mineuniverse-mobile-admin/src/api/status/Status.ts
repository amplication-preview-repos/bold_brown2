import { Mods } from "../mods/Mods";

export type Status = {
  createdAt: Date;
  description: string | null;
  id: string;
  modsItems?: Array<Mods>;
  name: string | null;
  updatedAt: Date;
};
