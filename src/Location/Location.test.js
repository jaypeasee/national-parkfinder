import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Location from './Location'
import { samplePark } from '../samplePark'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'

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