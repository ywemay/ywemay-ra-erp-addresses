import { Admin, Resource } from 'react-admin'
import { dataProvider, resources } from 'ywemay-ra-erp-data-provider-mock'
import { 
  addresses } from '../'

export default function App() {
  return <Admin disableTelemetry dataProvider={dataProvider}>
    <Resource {...addresses} />
  </Admin>
}