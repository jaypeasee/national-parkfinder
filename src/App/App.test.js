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

  it('should be able to add a park to the bucket list', async () => {
    const acadiaButton = screen.getByText('Acadia')
    userEvent.click(acadiaButton)
    const bucketListLink = screen.getByText('Bucket List')
    const bucketListBtn = await waitFor(() => screen.getByTestId('bucket-list'))
    userEvent.click(bucketListBtn)
    userEvent.click(bucketListLink)
    expect(screen.getByText('Acadia, ME')).toBeInTheDocument()
  })

  it('should be able to add a park to the visited list', async () => {
    const acadiaButton = screen.getByText('Acadia')
    userEvent.click(acadiaButton)
    const visitedLink = screen.getByText('Visited')
    const visitedBtn = await waitFor(() => screen.getByTestId('visited'))
    userEvent.click(visitedBtn)
    userEvent.click(visitedLink)
    expect(screen.getByText('Acadia, ME')).toBeInTheDocument()
  })
})
