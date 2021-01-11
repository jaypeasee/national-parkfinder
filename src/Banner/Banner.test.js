import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { samplePark } from '../samplePark'
import Banner from './Banner'

describe('Banner', () => {
  beforeEach(() => {
    render(
      <Banner currentPark={samplePark}/>
    )
  })
  
  it('should render the park title', () => {
    const parkTitle = screen.getByText('Acadia National Park, ME')
    expect(parkTitle).toBeInTheDocument()
  })

  it('should render the image', () => {
    const bannerImage = screen.getByTestId('banner-img')
    expect(bannerImage).toBeInTheDocument()
  })
})