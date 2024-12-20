import { useActionState } from 'react'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { fakeLogin } from '../utils'
import { AuthState } from '../types'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <Button variant="contained" type="submit" disabled={pending}>
      {pending ? 'Loading...' : 'Submit'}
    </Button>
  )
}

export default function AuthForm() {
  const [state, submitAction] = useActionState(auth, {
    data: null,
    error: null,
  })
  async function auth(_prevState: AuthState, formData: FormData) {
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    try {
      const response = await fakeLogin({ username, password })
      return { data: response, error: null }
    } catch (error) {
      return { data: null, error: (error as Error).message }
    }
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" color="initial">
        Auth Form
      </Typography>
      <Typography variant="body1" color="initial">
        Username: mor_2314
      </Typography>
      <Typography variant="body1" color="initial">
        Password: 83r5^_
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: { xs: '100%', md: '50%' },
          mt: 12,
          border: '1px solid #ccc',
          borderRadius: 4,
          padding: 2,
        }}
        action={submitAction}
      >
        <TextField size="small" type="username" name="username" placeholder="username" required />
        <TextField size="small" type="password" name="password" placeholder="password" required />

        {state.error && (
          <Typography color="error" variant="body2" sx={{ mt: 2 }}>
            {state.error}
          </Typography>
        )}
        <SubmitButton />
      </Box>
      {state.data && (
        <Typography color="success" variant="body2" sx={{ mt: 2 }}>
          {state.data.token}
        </Typography>
      )}
    </Container>
  )
}
