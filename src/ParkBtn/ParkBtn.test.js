import ParkBtn from './ParkBtn'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('ParkBtn', () => {
  let parkBtn
  const history = createMemoryHistory()
  const choosePark = jest.fn()

  beforeEach(() => {
    render(
      <Router history={history}>
        <ParkBtn 
          name="Grand Canyon"
          parkCode="grca"
          choosePark={choosePark}
        />
      </Router>
    )
    parkBtn = screen.getByText('Grand Canyon')
  })

  it('should should render the button', () => {
    expect(parkBtn).toBeInTheDocument()
  })

  it('should change the pathname on click', () => {
    userEvent.click(parkBtn)
    expect(history.location.pathname).toBe('/park/grca/about')
  })
})