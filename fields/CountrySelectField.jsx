import { SelectField } from "react-admin"
import { useCountries } from '../hooks'

export function CountrySelectField(props = {}) {
  const countries = useCountries();
  return <SelectField 
    label="address.country"
    source="country"
    choices={countries}
    {...props}
    />
}

CountrySelectField.defaultProps = { label: "address.country" }