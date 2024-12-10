import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { setModalState } from '../store/reducers/modal-slice'

export default function DialogComponent() {
  const { isOpen } = useSelector((state: RootState) => state.modal_reducer)
  const dispatch = useDispatch()

  const handleClose = () => dispatch(setModalState(false))

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="test-content-title"
      aria-describedby="Test Content-description"
    >
      <DialogTitle id="test-content-title">{'Test Content'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="test-content-description">Test Description</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}
