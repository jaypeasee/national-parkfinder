import MainNav from './MainNav'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('MainNav', () => {
  const history = createMemoryHistory()
  beforeEach(() => {
    render(
      <Router history={history}>
        <MainNav
          filterButtonsByName={jest.fn()}
          generateRandomParkCode={jest.fn()}
        />
      </Router>
    )
  })

  it('should render a title and image', () => {
    expect(screen.getByAltText('National Parkfinder Logo')).toBeInTheDocument()
    expect(screen.getByText('National Parkfinder')).toBeInTheDocument()
  })

  it('should render a list of park buttons', () => {
    expect(screen.getByText('Grand Canyon')).toBeInTheDocument()
    const allButtons = screen.getAllByRole("button")
    expect(allButtons.length).toBe(63)
  })

  it('should be able to filter the list of park buttons based on name match', () => {
    const searchInput = screen.getByPlaceholderText('search by name')
    userEvent.type(searchInput, 'grand')
    const allButtons = screen.getAllByRole("button")
    expect(allButtons.length).toBe(3)
    expect(screen.getByText('Grand Canyon')).toBeInTheDocument()
  })
})

