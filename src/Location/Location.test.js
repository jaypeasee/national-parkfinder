import { screen, render } from '@testing-library/react'
import Location from './Location'
import { samplePark } from '../samplePark'
import '@testing-library/jest-dom'

describe('Location', () => {

  beforeEach(() => {
    render(
      <Location currentPark={samplePark} />
    )
  })

  it('should render the park location and dirctions info', () => {
    const parkDirections = screen.getByText(/driving directions to acadia:/i)
    expect(parkDirections).toBeInTheDocument()
  })
})  