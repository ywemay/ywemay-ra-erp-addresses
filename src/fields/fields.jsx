import { TextField } from "react-admin";

export const ZipField = (props) => <TextField
  label="address.zip"
  source="zip"
  {...props}
/>

export const ProvinceField = (props) => <TextField
  label="address.province"
  source="province"
  {...props}
/>

export const CityField = (props) => <TextField
  label="address.city"
  source="city"
  {...props}
/> 

export const AddressField = (props) => <TextField
  label="address.address"
  source="address"
  {...props}
/> 