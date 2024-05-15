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

export function Layout(props) {
  return <SimpleShowLayout {...props}>
    <ZipField />
    <CountrySelectField />
    <ProvinceField />
    <CityField />
    <AddressField />
  </SimpleShowLayout>
}