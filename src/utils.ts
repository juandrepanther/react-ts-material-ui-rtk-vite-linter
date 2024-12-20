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

export const fakeLogin = async ({ username, password }: { username: string; password: string }) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })

    if (!response.ok) {
      throw new Error('Something went wrong')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error logging in:', error)
    throw error
  }
}
