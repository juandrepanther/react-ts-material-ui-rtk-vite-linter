import { use, useState, Suspense } from 'react'
import { getProducts } from '../utils'
import { Products, ProductsProps } from '../types'
import { Box, Button, Paper } from '@mui/material'

const ProductsOutput = ({ productsPromise }: ProductsProps) => {
  const messageContent: Products = use(productsPromise)

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, my: 2 }}>
      {messageContent.map(({ price, title, id, image }) => {
        return (
          <Paper key={id} sx={{ p: 2 }}>
            <p>Price: {price}</p>
            <img width={100} src={image} alt={title} />
          </Paper>
        )
      })}
    </Box>
  )
}

const ProductsContainer = ({ productsPromise }: ProductsProps) => {
  return (
    <Suspense fallback={<p>⌛Downloading products...</p>}>
      <ProductsOutput productsPromise={productsPromise} />
    </Suspense>
  )
}

export default function ProductsList() {
  const [productsPromise, setProductsPromise] = useState<Promise<Products> | null>(null)
  const [show, setShow] = useState(false)

  function download() {
    setProductsPromise(getProducts(import.meta.env.VITE_API_URL + '/products'))
    setShow(true)
  }

  if (show && productsPromise) {
    return <ProductsContainer productsPromise={productsPromise} />
  } else {
    return (
      <Button variant="outlined" onClick={download}>
        Download products
      </Button>
    )
  }
}
