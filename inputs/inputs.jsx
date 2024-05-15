import { TextInput } from "react-admin";

export const ZipInput = (props) => <TextInput 
  label="address.zip" 
  source="zip" 
  {...props} />

export const ProvinceInput = (props) => <TextInput 
  label="address.province"
  source="province" 
  {...props} />

export const CityInput = (props) => <TextInput 
  label="address.city"
  source="city" 
  {...props} />

export const AddressInput = (props) => <TextInput 
  label="address.address"
  source="address" 
  {...props} />