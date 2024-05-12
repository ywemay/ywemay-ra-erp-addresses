import {
  TextInput,
  SimpleForm,
} from "react-admin";
import { CountrySelectInput } from '../inputs';

export function Form(props = {}) {
  return <SimpleForm {...props}>
    <CountrySelectInput defaultValue="CN" />
    <TextInput
      label="address.zip"
      source="zip"
      />
    <TextInput
      label="address.province"
      source="province"
      />
    <TextInput
      label="address.city"
      source="city"
      />
    <TextInput
      label="address.address"
      source="address"
      />
  </SimpleForm>
}