import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StatusWhereUniqueInput } from "../status/StatusWhereUniqueInput";

export type ModsWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: StatusWhereUniqueInput;
};
