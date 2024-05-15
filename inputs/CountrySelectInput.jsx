import { 
  SelectInput
} from "react-admin"
import { useCountries } from '../hooks'

const label="address.country"

export function CountrySelectInput(props = {}) {
  const countries = useCountries();
  return <SelectInput 
    label={label}
    source="country"
    choices={countries}
    {...props}
    />
}

CountrySelectInput.defaultProps = { label }