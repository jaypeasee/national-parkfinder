import ParkContainer from './ParkContainer';
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { samplePark } from '../samplePark'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { parkRequest } from './npsApiCall'
jest.mock('./npsApiCall.js')

describe('ParkContainer', () => {
  const history = createMemoryHistory()

  beforeEach(() => {
    parkRequest.mockResolvedValueOnce(samplePark)
    render(
      <Router history={history}>
        <ParkContainer  parkCode={'acad'} />
      </Router>
    )
  })

  it('should render the container for parks and user view', async ()  => {
    screen.debug()
    const acadiaPark = await waitFor(() => screen.getByText('Acadia National Park, ME'))
    expect(acadiaPark).toBeInTheDocument()
  })
})
