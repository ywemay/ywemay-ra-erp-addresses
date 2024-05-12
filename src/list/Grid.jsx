import { Datagrid } from "react-admin";
import { 
  CountrySelectField,
  ZipField,
  ProvinceField,
  CityField,
  AddressField,
} from "../fields";

export function Grid(props = {}) {

  return <Datagrid {...props}>
    <CountrySelectField />
    <ProvinceField />
    <ZipField />
    <CityField />
    <AddressField />
  </Datagrid>
}
