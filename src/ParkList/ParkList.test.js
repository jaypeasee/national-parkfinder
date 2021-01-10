import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ParkList from './ParkList'
import '@testing-library/jest-dom'

describe('ParkList', () => {
  let randomBtn
  beforeEach(() => {
    const generateRandomParkCode = jest.fn()
    render(
      <ParkList 
        generateRandomParkCode={generateRandomParkCode}
      />
    )
    randomBtn = screen.getByAltText("randomize-icon")
  })

  it('should render with a randomize button', () => {
    expect(randomBtn).toBeInTheDocument()
  })

  it('should call generateRandomParkCode when the random button is clicked', () => {
    userEvent.click(randomBtn)
    expect(generateRandomParkCode).toHaveBeenCalledTimes(1)
  })
})