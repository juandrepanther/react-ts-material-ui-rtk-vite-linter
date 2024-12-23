import { useDispatch, useSelector } from 'react-redux'
import { setMode } from '../store/reducers/mode-slice'
import { RootState } from '../store/store'
import Switch from '@mui/material/Switch'

export default function ToggleMode() {
  const { mode } = useSelector((state: RootState) => state.mode_reducer)
  const dispatch = useDispatch()

  const changeMode = () => dispatch(setMode({ mode: mode === 'dark' ? 'light' : 'dark' }))

  return <Switch onClick={changeMode}></Switch>
}
