import { PromiseType } from './types'

export const getProducts = (url: string): PromiseType => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error))
  })
}
