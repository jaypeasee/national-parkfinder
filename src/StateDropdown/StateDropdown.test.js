import StateDropdown from './StateDropdown'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('StateDropdown', () => {
  let dropdown
  const setStateSelect = jest.fn()
  
  beforeEach(() => {
    render(
      <StateDropdown
        setStateSelect={setStateSelect}
      />
    )
    dropdown = screen.getByTestId('dropdown-form')
  })

  it('should render a dropdown form', () => {
    expect(dropdown).toBeInTheDocument()
  })

  it('should select a state with the associated value', () => {
    userEvent.click(screen.getByText('Minnesota'))
    // need to figure out how to do the user event for a dropdown form
  })
})