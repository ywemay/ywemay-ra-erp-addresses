import { Edit as RaEdit } from "react-admin";
import { Form } from "./Form";

export function Edit({form, ...props}) {
  return <RaEdit {...props}><Form {...form} /></RaEdit>
}