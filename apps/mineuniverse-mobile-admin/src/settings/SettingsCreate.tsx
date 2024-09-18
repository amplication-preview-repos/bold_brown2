import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const SettingsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="defaultZoomLevel"
          source="defaultZoomLevel"
        />
        <BooleanInput
          label="qrCodeReaderEnabled"
          source="qrCodeReaderEnabled"
        />
        <TextInput label="theme" source="theme" />
      </SimpleForm>
    </Create>
  );
};
