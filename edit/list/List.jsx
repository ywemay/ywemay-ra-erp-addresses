import { 
  InfiniteList as List,
  useTranslate,
 } from "react-admin";
import { Create } from "./Create";
import { Grid } from "./Grid"

const Title = () => {
  const t = useTranslate();
  return <h1>
    {t('addresses.addresses')}
  </h1>
} 

function Empty() {
  return <div className="full-width">
    <Create />
  </div>
}

export function EditList(props) {
  
  return <List
      title=" "
      actions={false}
      exporter={false}
      disableSyncWithLocation
      empty={<Empty />}
      {...props}
    >
      <Title />
      <Grid />
    </List>
}