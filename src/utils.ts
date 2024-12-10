import { FormType, PromiseType } from './types'

export const getProducts = (url: string): PromiseType => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error))
  })
}

export const postProduct = (url: string, data: FormType): PromiseType => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.table(data)
        resolve(data)
      })
      .catch((error) => reject(error))
  })
}
