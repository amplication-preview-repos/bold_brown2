import { StatusWhereUniqueInput } from "../status/StatusWhereUniqueInput";

export type ModsCreateInput = {
  description?: string | null;
  name?: string | null;
  status?: StatusWhereUniqueInput | null;
};
