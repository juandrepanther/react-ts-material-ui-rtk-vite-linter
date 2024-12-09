import { SetStateAction } from 'react'

export interface Rating {
  rate: number
  count: number
}

export interface Product {
  id: number
  title: string
  price: number
  rating: Rating
  category: string
  description: string
  image: string
}

export type Products = Product[]

export type PromiseType = SetStateAction<Promise<Products> | null>
