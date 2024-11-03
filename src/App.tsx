import { Typography } from '@mui/material'

import { useSelector } from 'react-redux'
import { RootState } from './store/store'

export default function App() {
  const { state } = useSelector((state: RootState) => state.darkMode_reducer)

  return (
    <main>
      <Typography sx={{ color: '#000', fontSize: '2rem', fontWeight: 500 }}>
        Hello {state}!
      </Typography>
    </main>
  )
}
