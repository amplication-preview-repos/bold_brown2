import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const SettingsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
