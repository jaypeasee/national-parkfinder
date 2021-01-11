import UserNav from './UserNav'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { samplePark } from '../samplePark'

describe('UserNav', () => {
  const history = createMemoryHistory()
  let aboutLink
  let contactLink
  let locationLink
  beforeEach(() => {
    render(
      <Router
        history={history}>
        <UserNav 
          currentPark={samplePark}
        />
      </Router>
    )
    aboutLink = screen.getByText("About")
    contactLink = screen.getByText("Contact")
    locationLink = screen.getByText("Location")
  })

  it('should render 3 menu options', () => {
    expect(aboutLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
    expect(locationLink).toBeInTheDocument()
  })

  it('should redirect to a new path when About is clicked', () => {
    userEvent.click(aboutLink)
    expect(history.location.pathname).toBe('/acad/about')
  })

  it('should redirect to a new path when Contact is clicked', () => {
    userEvent.click(contactLink)
    expect(history.location.pathname).toBe('/acad/contact')
  })

  it('should redirect to a new path when Location is clicked', () => {
    userEvent.click(locationLink)
    expect(history.location.pathname).toBe('/acad/location')
  })
})