import {
  SimpleShowLayout,
} from 'react-admin'
import { 
  CountrySelectField,
  ZipField,
  ProvinceField,
  CityField,
  AddressField,
} from "../fields";

export function Show(props) {
  return <SimpleShowLayout {...props}>
    <ZipField />
    <CountrySelectField />
    <ProvinceField />
    <CityField />
    <ProvinceField />
    <AddressField />
  </SimpleShowLayout>
}