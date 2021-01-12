import NavSearch from './NavSearch'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('NavSearch', () => {
  const setSearch = jest.fn()
  let searchInput
  beforeEach(() => {
    render(
      <NavSearch 
        setSearch={setSearch}
      />
    )
    searchInput = screen.getByPlaceholderText('Search by name')
  })

  it('should render a search bar', () => {
    expect(searchInput).toBeInTheDocument()
  })

  it('should call filterButtonsByName with the typed value', () => {
    userEvent.type(searchInput, 'Grand')
    expect(setSearch).toHaveBeenCalledTimes(5)
    expect(setSearch).toHaveBeenCalledWith('Grand')
  }) 
})