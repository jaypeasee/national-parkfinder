import NavSearch from './NavSearch'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('NavSearch', () => {
  const filterButtonsByName = jest.fn()
  let searchInput
  beforeEach(() => {
    render(
      <NavSearch 
        filterButtonsByName={filterButtonsByName}
      />
    )
    searchInput = screen.getByPlaceholderText('search by name')
  })

  it('should render a search bar', () => {
    expect(searchInput).toBeInTheDocument()
  })

  it('should call filterButtonsByName with the typed value', () => {
    userEvent.type(searchInput, 'Grand')
    expect(filterButtonsByName).toHaveBeenCalledTimes(5)
    expect(filterButtonsByName).toHaveBeenCalledWith('Grand')
  }) 
})