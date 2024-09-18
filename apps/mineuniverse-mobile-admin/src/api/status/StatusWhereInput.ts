import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ModsListRelationFilter } from "../mods/ModsListRelationFilter";

export type StatusWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  modsItems?: ModsListRelationFilter;
  name?: StringNullableFilter;
};
