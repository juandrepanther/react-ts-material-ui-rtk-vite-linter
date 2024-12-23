import { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useFormStatus } from 'react-dom'
import { postProduct } from '../utils'

function Submit() {
  const { pending, method, data, action } = useFormStatus()
  console.table({ pending, method, data, action })

  return (
    <Button type="submit" variant="contained" disabled={pending}>
      Submit Form
    </Button>
  )
}

export default function Form() {
  const [error, setError] = useState<string | null>(null)
  const submit = async (formData: FormData) => {
    const data = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      price: Number(formData.get('price')),
      category: formData.get('category') as string,
      image: formData.get('image') as string,
    }

    try {
      await postProduct(import.meta.env.VITE_API_URL + '/products', data)
      setError(null)
    } catch (error) {
      console.error('Error posting product:', error)
      setError('Failed to submit the form. Please try again.')
    }
  }

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: { xs: '100%', md: '50%' },
        my: 12,
      }}
      action={submit}
    >
      <TextField size="small" type="text" name="title" label="Title" required />
      <TextField size="small" type="text" name="description" label="Description" required />
      <TextField size="small" type="number" name="price" label="Price" required />
      <TextField size="small" type="text" name="category" label="Category" required />
      <TextField size="small" type="text" name="image" label="Image URL" required />
      <Submit />
      {error && (
        <Typography color="error" variant="body2" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
    </Box>
  )
}
