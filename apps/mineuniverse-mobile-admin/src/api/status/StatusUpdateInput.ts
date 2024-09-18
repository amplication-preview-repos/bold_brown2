import { ModsUpdateManyWithoutStatusesInput } from "./ModsUpdateManyWithoutStatusesInput";

export type StatusUpdateInput = {
  description?: string | null;
  modsItems?: ModsUpdateManyWithoutStatusesInput;
  name?: string | null;
};
