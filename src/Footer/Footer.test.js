import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Footer from './Footer'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'

describe('Footer', () => {
  let visitedLink
  let bucketListLink
  const history = createMemoryHistory()

  beforeEach(() => {
    render(
      <Router history={ history }>
        <Footer />
      </Router>
    )
    visitedLink = screen.getByText('Visited')
    bucketListLink = screen.getByText('Bucket List')
  })

  it('should render the footer', () => {
    expect(visitedLink).toBeInTheDocument()
    expect(bucketListLink).toBeInTheDocument()
  })

  it('should redirect to a new url', () => {
    userEvent.click(visitedLink)
    expect(history.location.pathname).toBe('/user/visited')
    
    userEvent.click(bucketListLink)
    expect(history.location.pathname).toBe('/user/bucket-list')
  })
})