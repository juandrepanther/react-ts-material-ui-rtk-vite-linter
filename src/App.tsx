import { Box, Container, Grid2, Typography, ThemeProvider, CssBaseline } from '@mui/material'
import { themes } from './theme'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'
import ButtonComponent from './shared/button'
import DialogComponent from './shared/modal'
import ProductsList from './components/products'
import Form from './components/form'
import AuthForm from './components/auth-form'
import ToggleMode from './components/toggle-mode'

export default function App() {
  const { mode } = useSelector((state: RootState) => state.mode_reducer)

  return (
    <ThemeProvider theme={themes[mode]}>
      <CssBaseline />
      <main>
        <Container maxWidth="lg">
          <ToggleMode />
          <Grid2 spacing={1} container>
            <Grid2 size={{ xs: 12, md: 6 }} display="flex">
              <Typography sx={{ fontSize: '2rem', fontWeight: 500 }}>Hello Template!</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} justifyContent="center" display="flex">
              <ButtonComponent title="Click me!" />
            </Grid2>
          </Grid2>
          <ProductsList />
          <Box>
            <Form />
          </Box>
        </Container>
        <DialogComponent />
        <AuthForm />
      </main>
    </ThemeProvider>
  )
}
