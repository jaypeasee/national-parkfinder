import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Footer from './Footer'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'

describe('Footer', () => {
  let footer
  const history = createMemoryHistory()

  beforeEach(() => {
    render(
      <Router history={ history }>
        <Footer />
      </Router>
    )
    footer = screen.getByText('Visited')
  })

  it('should render the footer', () => {
    expect(footer).toBeInTheDocument()
  })

  it('should redirect to a new url', () => {
    userEvent.click(footer)
    expect(history.location.pathname).toBe('/user/visited')
  })
})