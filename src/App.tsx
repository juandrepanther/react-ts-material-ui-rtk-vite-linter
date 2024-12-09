import { Container, Grid2, Typography } from '@mui/material'
import ButtonComponent from './shared/button'
import DialogComponent from './shared/modal'
import ProductsList from './components/products'

export default function App() {
  return (
    <main>
      <Container maxWidth="lg">
        <Grid2 spacing={1} container>
          <Grid2 size={{ xs: 12, md: 6 }} justifyContent="center" display="flex">
            <Typography sx={{ color: '#000', fontSize: '2rem', fontWeight: 500 }}>
              Hello Template!
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} justifyContent="center" display="flex">
            <ButtonComponent title="Click me!" />
          </Grid2>
        </Grid2>
        <ProductsList />
      </Container>
      <DialogComponent />
    </main>
  )
}
