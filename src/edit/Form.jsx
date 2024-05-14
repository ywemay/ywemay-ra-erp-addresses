import {
  SimpleForm,
} from "react-admin";
import { 
  CountrySelectInput,
  ZipInput, CityInput, ProvinceInput, AddressInput
} from '../inputs';

export function Form(props = {}) {
  return <SimpleForm {...props}>
    <CountrySelectInput defaultValue="CN" />
    <ZipInput />
    <CityInput />
    <ProvinceInput />
    <AddressInput />
  </SimpleForm>
}