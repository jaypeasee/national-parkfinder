import App from './App';
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import userEvent from '@testing-library/user-event';

describe('App', () => {
  let acadiaButton
  const history = createMemoryHistory()
  beforeEach(() => {
    history.location.pathName='/acad'
    render(
      <Router history={history}>
        <App />
      </Router>
    )
    acadiaButton = screen.getByText('Acadia')
  })

  it('should render a park when user clicks a park button', async () => {
    userEvent.click(acadiaButton)
    const acadiaPark = await waitFor(() => screen.getByText('Acadia National Park, ME'))
    expect(acadiaPark).toBeInTheDocument()
  })

  it('should be able to add a park to the bucket list', async () => {
    userEvent.click(acadiaButton)
    const bucketListLink = screen.getByText('Bucket List')
    const bucketListBtn = await waitFor(() => screen.getByTestId('bucket-list'))
    userEvent.click(bucketListBtn)
    userEvent.click(bucketListLink)
    expect(screen.getByText('Acadia, ME')).toBeInTheDocument()
  })

  it('should be able to add a park to the visited list', async () => {
    userEvent.click(acadiaButton)
    const visitedLink = screen.getByText('Visited')
    const visitedBtn = await waitFor(() => screen.getByTestId('visited'))
    userEvent.click(visitedBtn)
    userEvent.click(visitedLink)
    expect(screen.getByText('Acadia, ME')).toBeInTheDocument()
  })

  //should be move a bucket list park into visited
    //assert that when it's added
      //the it's no longer in the document
      //when you go to the visited list, it's in the document
  
  //do we need to assert that we have a random park on load?

  //should be able to toggle the bucket list and visited list?

  //should be able to remove from the bucket list and visited list?
})
