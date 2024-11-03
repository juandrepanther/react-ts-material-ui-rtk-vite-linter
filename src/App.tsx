import { Grid2, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'
import ButtonComponent from './components/button'

export default function App() {
  const { state } = useSelector((state: RootState) => state.darkMode_reducer)

  return (
    <main>
      <Grid2 spacing={1} container>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography sx={{ color: '#000', fontSize: '2rem', fontWeight: 500 }}>
            Hello {state}!
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <ButtonComponent title="Click me!" />
        </Grid2>
      </Grid2>
    </main>
  )
}
