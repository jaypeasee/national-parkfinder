import About from './About'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { samplePark } from '../samplePark'

describe('About', () => {

  beforeEach(() => {
    render(
      <About
        currentPark={samplePark.data[0]}
      />
    )
  })

  it('should render the info about the park', () => {
    const aboutInfo = screen.getByText(/about acadia:/i)
    expect(aboutInfo).toBeInTheDocument()
  })
})
