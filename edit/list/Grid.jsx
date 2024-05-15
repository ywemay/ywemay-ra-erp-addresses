import { Create } from "./Create";
import { Grid as MainGrid } from '../../list/Grid'

export function Grid(props) {
  return <><MainGrid {...props}/>
    <Create />
  </>
}