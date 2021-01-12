import StateDropdown from './StateDropdown'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('StateDropdown', () => {
  let dropdown
  let selectForm
  const setStateSelect = jest.fn()
  
  beforeEach(() => {
    render(
      <StateDropdown
        setStateSelect={setStateSelect}
      />
    )
    dropdown = screen.getByTestId('dropdown-form')
    selectForm = screen.getByTestId('select-form')
  })

  it('should render a dropdown form', () => {
    expect(dropdown).toBeInTheDocument()
  })

  it('should select a state with the associated value', () => {
    const minnesota = screen.getByText('Minnesota')
    userEvent.selectOptions(selectForm, [minnesota])
    expect(minnesota).toHaveValue('MN')
    expect(setStateSelect).toHaveBeenCalledWith('MN')
    expect(setStateSelect).toHaveBeenCalledTimes(1)
  })
})