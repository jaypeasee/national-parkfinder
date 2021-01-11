import Contact from './Contact'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { samplePark } from '../samplePark'

describe('Contact', () => {

  beforeEach(() => {
    render(
      <Contact
        currentPark={samplePark.data[0]}
      />
    )
  })

  it('should render the park contact info', () => {
    const parkContact = screen.getByText(/bar harbor, me 04609/i)
    expect(parkContact).toBeInTheDocument()
  })
})  