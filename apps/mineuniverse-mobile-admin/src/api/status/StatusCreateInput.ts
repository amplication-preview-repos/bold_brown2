import { ModsCreateNestedManyWithoutStatusesInput } from "./ModsCreateNestedManyWithoutStatusesInput";

export type StatusCreateInput = {
  description?: string | null;
  modsItems?: ModsCreateNestedManyWithoutStatusesInput;
  name?: string | null;
};
