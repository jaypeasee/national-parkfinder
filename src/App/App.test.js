import App from './App';
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { samplePark } from '../samplePark'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import userEvent from '@testing-library/user-event';

describe('App', () => {
  
  beforeEach(() => {
    const history = createMemoryHistory()
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

  // it('should randomly generate a park code on load', async () => {
  //   // generateRandomParkCode.mockResolvedValueOnce('acad')
  //   // generateRandomParkCode = jest.fn().mockImplementationOnce(() => 'acad')
  //   const history = createMemoryHistory()
  //   history.location.pathname='/acad/about'
  //   render(
  //     <Router history={history}>
  //       <App />
  //     </Router>
  //   )
  //   screen.debug()
  //   const acadiaPark = await waitFor(() => screen.getByText('Acadia National Park, ME'))
  //   expect(acadiaPark).toBeInTheDocument()
  // })

// can we add adn remove from bucket list and visited
//
})
