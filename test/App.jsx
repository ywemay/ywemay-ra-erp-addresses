import { Admin, Resource } from 'react-admin'
import { dataProvider } from 'ywemay-ra-erp-data-provider-mock'
import { 
  addresses,
  people_addresses,
  } from '../'
import { List as list } from '../list'
addresses.list = list;

export default function App() {
  return <Admin disableTelemetry dataProvider={dataProvider}>
    <Resource {...addresses} />
    <Resource {...people_addresses} />
  </Admin>
}