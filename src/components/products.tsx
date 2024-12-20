import { use, useState, Suspense } from 'react'
import { getProducts } from '../utils'
import { Products } from '../types'
import { Button } from '@mui/material'

interface ProductsOutputProps {
  productsPromise: Promise<Products>
}

const ProductsOutput = ({ productsPromise }: ProductsOutputProps) => {
  const messageContent: Products = use(productsPromise)
  return (
    <>
      {messageContent.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <img width={200} src={product.image} alt={product.title} />
          </div>
        )
      })}
    </>
  )
}

interface ProductsContainerProps {
  productsPromise: Promise<Products>
}

const ProductsContainer = ({ productsPromise }: ProductsContainerProps) => {
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
