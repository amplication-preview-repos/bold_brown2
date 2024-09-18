import { Status } from "../status/Status";

export type Mods = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  status?: Status | null;
  updatedAt: Date;
};
