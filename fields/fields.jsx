import { TextField } from "react-admin";

export const ZipField = (props) => <TextField
  label="address.zip"
  source="zip"
  {...props}
/>

ZipField.defaultProps = { label: "address.zip" }

export const ProvinceField = (props) => <TextField
  // label="address.province"
  source="province"
  {...props}
/>

ProvinceField.defaultProps = { label: "address.province" }

export const CityField = (props) => <TextField
  label="address.city"
  source="city"
  {...props}
/> 
CityField.defaultProps = { label: "address.city" }

export const AddressField = (props) => <TextField
  label="address.address"
  source="address"
  {...props}
/> 
AddressField.defaultProps = { label: "address.address" }