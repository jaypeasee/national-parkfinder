import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ParkInfo from './ParkInfo'
import { samplePark } from '../samplePark'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'

describe('ParkInfo', () => {
  const history = createMemoryHistory()
  const addToVisited = jest.fn()
  const deleteFromVisited = jest.fn()
  const addToBucketList = jest.fn()
  const deleteFromBucketList = jest.fn()

  const localPark = {
    name: 'Denali',
    state: 'AK',
    image: 'https://media.nationalgeographic.org/assets/photos/172/369/81ad2d66-4da3-43c1-b5ff-5d30ace2ca2e.jpg',
    parkCode: 'dena',
    visited: false,
    bucketList: false
  }

  beforeEach(() => {
    render(
      <Router history={history}>
        <ParkInfo 
          currentPark={samplePark}
          localPark={localPark}
          addToVisited={addToVisited}
          deleteFromVisited={deleteFromVisited}
          addToBucketList={addToBucketList}
          deleteFromBucketList={deleteFromBucketList} 
        />
      </Router>
    )
  })

  it('should render the park info', () => {
    const parkInfo = screen.getByRole('heading', {
      name: /add to visited/i
    })
    expect(parkInfo).toBeInTheDocument()
  })

})
