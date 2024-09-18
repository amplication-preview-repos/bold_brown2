import { SortOrder } from "../../util/SortOrder";

export type SettingsOrderByInput = {
  createdAt?: SortOrder;
  defaultZoomLevel?: SortOrder;
  id?: SortOrder;
  qrCodeReaderEnabled?: SortOrder;
  theme?: SortOrder;
  updatedAt?: SortOrder;
};
