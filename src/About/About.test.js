import { screen, render } from '@testing-library/react'
import About from './About'
import { samplePark } from '../samplePark'
import '@testing-library/jest-dom'

describe('About', () => {

  beforeEach(() => {
    render(
      <About
        currentPark={samplePark}
      />
    )
  })

  it('should render the info about the park', () => {
    const aboutInfo = screen.getByText(/about acadia:/i)
    expect(aboutInfo).toBeInTheDocument()
  })
})
