import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { test, describe, expect } from 'vitest'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import ButtonComponent from '../components/button'
import App from '../App'

describe('Demo Tests', () => {
  test('Button Component', () => {
    render(
      <Provider store={store}>
        <ButtonComponent title="Click me!" />
      </Provider>,
    )
    screen.getByText('Click me!')
  })
})

describe('Button and Modal Tests', () => {
  test('Button click opens modal', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    )

    const button = screen.getByText('Click me!')
    fireEvent.click(button)

    const modal = screen.getByText('Test Content')
    expect(modal).toBeInTheDocument()
  })
})
