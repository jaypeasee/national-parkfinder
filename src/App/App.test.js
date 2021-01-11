import App from './App';
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import userEvent from '@testing-library/user-event';

describe('App', () => {
  const history = createMemoryHistory()
  beforeEach(() => {
    history.location.pathName='/acad'
    render(
      <Router history={history}>
        <App />
      </Router>
    )
  })

  it('should render a park when user clicks a park button', async () => {
    const acadiaButton = screen.getByText('Acadia')
    userEvent.click(acadiaButton)
    const acadiaPark = await waitFor(() => screen.getByText('Acadia National Park, ME'))
    expect(acadiaPark).toBeInTheDocument()
  })

  it('should be able to add and remove a park to the bucket list', () => {
    const acadiaButton = screen.getByTestId('acad button')
    userEvent.click(acadiaButton)
    // history.location.pathname="/acad/about"
    const bucketListLink = screen.getByText('Bucket List')
    const bucketListBtn = screen.getByTestId('bucket list')
    userEvent.click(bucketListBtn)
    userEvent.click(bucketListLink)
    expect(screen.getByText('Acadia, ME')).toBeInTheDocument()
  })
})
