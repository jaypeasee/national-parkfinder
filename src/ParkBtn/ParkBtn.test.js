import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ParkBtn from './ParkBtn'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'

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

  it('should should render a component', () => {
    expect(parkBtn).toBeInTheDocument()
  })
})