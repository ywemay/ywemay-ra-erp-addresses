import {
  Edit,
  Toolbar,
  SaveButton,
  useTranslate,
} from "react-admin";
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Form } from '../Form'

export function FormToolbar({ onClose, ...props }) {
  const t = useTranslate();
  return <Toolbar {...props}>
    <SaveButton />
    <Button
      startIcon={<CloseIcon />}
      variant="outlined"
      onClick={() => { if (typeof onClose === 'function') onClose()}}
      >{t("ra.action.close")}</Button>
  </Toolbar>
}

export function EditItem() {
  return <Edit>
    <EditForm />
  </Edit>
}

export function EditForm({ onClose, contactType, ...props }) {
  
  return <Form toolbar={<FormToolbar onClose={onClose} />} {...props} />
}