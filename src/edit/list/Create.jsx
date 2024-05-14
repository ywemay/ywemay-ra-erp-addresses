import { useState } from "react";
import { Create as RACreate, useNotify, useListContext } from "react-admin";
import { EditForm } from "./Form";
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'

export function Create(props) {
  
  const notify = useNotify();
  const [ show, setShow ] = useState(false);
  const { filter, refetch } = useListContext();
  
  const transform = (data) => {
    return {...data, ...filter }
  }

  const onSuccess = (_data) => {
    notify(`ra.notification.created`);
    setShow(false)
    refetch();
  };

  const onClose = () => setShow(false);

  return <div {...props}>
    { show ?
    <RACreate
      mutationOptions={{ onSuccess }}
      transform={transform}
      >
      <EditForm 
        onClose={onClose}
        />
    </RACreate> 
    : <IconButton onClick={() => setShow(true)}><AddIcon />
    </IconButton> 
    }
  </div>
}