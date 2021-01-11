import Location from './Location'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { samplePark } from '../samplePark'

describe('Location', () => {

  beforeEach(() => {
    render(
      <Location
        currentPark={samplePark}
      />
    )
  })

  it('should render the park location and dirctions info', () => {
    const parkDirections = screen.getByText(/driving directions to acadia:/i)
    expect(parkDirections).toBeInTheDocument()
  })
})  