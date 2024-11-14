import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setModalState } from '../store/reducers/modal-slice'

interface Props {
  title: string
}

export default function ButtonComponent({ title }: Props) {
  const dispatch = useDispatch()

  return (
    <Button variant="contained" id="button" onClick={() => dispatch(setModalState(true))}>
      {title}
    </Button>
  )
}
