import { List as RaList } from "react-admin";
import { Grid } from "./Grid";

export function List({ grid, ...props}) {
  return <RaList {...props}>
    <Grid {...grid}/>
  </RaList>
}