import { StatusWhereUniqueInput } from "../status/StatusWhereUniqueInput";

export type ModsUpdateInput = {
  description?: string | null;
  name?: string | null;
  status?: StatusWhereUniqueInput | null;
};
