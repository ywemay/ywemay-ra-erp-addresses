import { List as RaList } from "react-admin";
import { Grid } from "./Grid";

export function List({ grid, ...props}) {
  return <RaList exporter={false} {...props}>
    <Grid {...grid}/>
  </RaList>
}