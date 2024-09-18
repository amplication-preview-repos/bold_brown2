import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SettingsWhereInput = {
  defaultZoomLevel?: IntNullableFilter;
  id?: StringFilter;
  qrCodeReaderEnabled?: BooleanNullableFilter;
  theme?: StringNullableFilter;
};
