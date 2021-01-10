import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NavSearch from './NavSearch'
import '@testing-library/jest-dom'

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
})