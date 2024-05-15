import { Show as RaShow } from 'react-admin'
import { Layout } from './Layout'

export function Show (props) {
  return <RaShow {...props}>
    <Layout /></RaShow>
}