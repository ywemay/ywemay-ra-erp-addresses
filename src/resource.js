import {
  Edit as edit,
  Create as create,
} from './edit';
import { List as list } from './list'
import { Show as show } from './show'
import { Icon as icon } from './icon'

const name="addresses";

export const resource = name;

export const addresses = {
  name,
  icon,
  list, edit, create, show,
  options: { label: 'addresses.addresses' }
}