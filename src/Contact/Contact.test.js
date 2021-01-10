import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from './Contact'
import { samplePark } from '../samplePark'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'

describe('Contact', () => {

  beforeEach(() => {
    render(
        <Contact 
          currentPark={samplePark}
        />
    )
  })

  it('should render the park contact info', () => {
    const parkContact = screen.getByText(/bar harbor, me 04609/i)
    expect(parkContact).toBeInTheDocument()
  })
})  