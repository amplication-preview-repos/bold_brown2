import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const SettingsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SettingsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="defaultZoomLevel" source="defaultZoomLevel" />
        <TextField label="ID" source="id" />
        <BooleanField
          label="qrCodeReaderEnabled"
          source="qrCodeReaderEnabled"
        />
        <TextField label="theme" source="theme" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
