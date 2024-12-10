import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import { postProduct } from '../utils'
import Form from '../components/form'

vi.mock('../utils', () => ({
  postProduct: vi.fn(() =>
    Promise.reject(new Error('Failed to submit the form. Please try again.')),
  ),
}))

describe('Form Component', () => {
  test('pending state changes while submitting the form', async () => {
    render(<Form />)

    fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Test Title' } })
    fireEvent.change(screen.getByPlaceholderText('Description'), {
      target: { value: 'Test Description' },
    })
    fireEvent.change(screen.getByPlaceholderText('Price'), { target: { value: '100' } })
    fireEvent.change(screen.getByPlaceholderText('Category'), {
      target: { value: 'Test Category' },
    })
    fireEvent.change(screen.getByPlaceholderText('Image URL'), {
      target: { value: 'http://example.com/image.jpg' },
    })

    fireEvent.click(screen.getByText('Submit Form'))

    expect(screen.getByText('Submit Form')).toBeDisabled()

    await waitFor(() => expect(screen.getByText('Submit Form')).not.toBeDisabled())

    expect(postProduct).toHaveBeenCalled()

    await waitFor(() => {
      expect(screen.getByText('Failed to submit the form. Please try again.')).toBeInTheDocument()
    })
  })
})
