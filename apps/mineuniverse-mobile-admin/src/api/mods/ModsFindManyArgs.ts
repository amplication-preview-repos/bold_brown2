import { ModsWhereInput } from "./ModsWhereInput";
import { ModsOrderByInput } from "./ModsOrderByInput";

export type ModsFindManyArgs = {
  where?: ModsWhereInput;
  orderBy?: Array<ModsOrderByInput>;
  skip?: number;
  take?: number;
};
