import { Create as RaCreate } from "react-admin";
import { Form } from "./Form";

export function Create({form, ...props}) {
  return <RaCreate {...props}><Form {...form} /></RaCreate>
}