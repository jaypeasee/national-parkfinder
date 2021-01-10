import { screen, render } from '@testing-library/react'
import MainNav from './MainNav'
import '@testing-library/jest-dom'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('MainNav', () => {
  const history = createMemoryHistory()
  it('should render a title and image', () => {
    render(
      <Router history={history}>
        <MainNav/>
      </Router>
    )
    expect(screen.getByAltText('National Parkfinder Logo')).toBeInTheDocument()
    expect(screen.getByText('National Parkfinder')).toBeInTheDocument()
  })
})