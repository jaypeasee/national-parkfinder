import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SavedCard from './SavedCard'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'

describe('SavedCard', () => {
  const addToVisited = jest.fn()
  const deleteFromVisited = jest.fn()
  const addToBucketList = jest.fn()
  const deleteFromBucketList = jest.fn()



  describe('Visited', () => {
    const visitedPark = {
      name: 'Denali',
      state: 'AK',
      image: 'https://media.nationalgeographic.org/assets/photos/172/369/81ad2d66-4da3-43c1-b5ff-5d30ace2ca2e.jpg',
      parkCode: 'dena',
      visited: true,
      bucketList: false
    }
    const history = createMemoryHistory()
    beforeEach(() => {
      history.location.pathname = '/user/visited'
      render(
        <Router history={history}>
          <SavedCard 
            key={visitedPark.parkCode}
            name={visitedPark.name}
            image={visitedPark.image}
            parkCode={visitedPark.parkCode}
            state={visitedPark.state}
            bucketList={visitedPark.bucketList}
            visited={visitedPark.visited}
            addToVisited={addToVisited}
            deleteFromVisited={deleteFromVisited}
            addToBucketList={addToBucketList}
            deleteFromBucketList={deleteFromBucketList}
          />
          </Router>
      )
    })

    it('should render a card for a users visited park if they have clicked to add', () => {
      const visitedPark = screen.getByText('Denali, AK')
      expect(visitedPark).toBeInTheDocument()
    })

    it('should deleteFromVisited with correct arguments when delete button is clicked', () => {
      userEvent.click(screen.getByText('Delete from Visited'))
      expect(deleteFromVisited).toHaveBeenCalledTimes(1)
      expect(deleteFromVisited).toHaveBeenCalledWith('dena')
    })

  })

  describe('BucketList', () => {
    const history = createMemoryHistory()
    const bucketListPark = {
      name: 'Denali',
      state: 'AK',
      image: 'https://media.nationalgeographic.org/assets/photos/172/369/81ad2d66-4da3-43c1-b5ff-5d30ace2ca2e.jpg',
      parkCode: 'dena',
      visited: false,
      bucketList: true
    }
    beforeEach(() => {
      history.location.pathname = '/user/bucket-list'
      render(
        <Router history={history}>
          <SavedCard 
            key={bucketListPark.parkCode}
            name={bucketListPark.name}
            image={bucketListPark.image}
            parkCode={bucketListPark.parkCode}
            state={bucketListPark.state}
            bucketList={bucketListPark.bucketList}
            visited={bucketListPark.visited}
            addToVisited={addToVisited}
            deleteFromVisited={deleteFromVisited}
            addToBucketList={addToBucketList}
            deleteFromBucketList={deleteFromBucketList}
          />
          </Router>
      )
    })

    it('should deleteFromBucketList with correct arguments when delete button is clicked', () => {
      userEvent.click(screen.getByText('Delete from Bucket List'))
      expect(deleteFromBucketList).toHaveBeenCalledTimes(1)
      expect(deleteFromBucketList).toHaveBeenCalledWith('dena')
    })

    it('should deleteFromBucketList AND addToVisited with correct arguments when add to visited button is clicked', () => {
      userEvent.click(screen.getByText('Add to Visited'))
      expect(deleteFromBucketList).toHaveBeenCalledTimes(1)
      expect(deleteFromBucketList).toHaveBeenCalledWith('dena')
    })
  })  
})