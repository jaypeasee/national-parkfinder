import SavedParks from './SavedParks'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('SavedParks', () => {
  const addToVisited = jest.fn()
  const deleteFromVisited = jest.fn()
  const addToBucketList = jest.fn()
  const deleteFromBucketList = jest.fn()
  const mockVisited = [
    {
      name: 'Arches',
      state: 'UT',
      image: 'https://www.treehugger.com/thmb/eUdkL7RNPgpiEldNo4h2aUwzbNc=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2011__07__shutterstock_1164019927-82525a1b70524d56bd557edd7e191405.jpg',
      parkCode: 'arch',
      visited: true,
      bucketList: false
    },
    {
      name: 'Badlands',
      state: 'SD',
      image: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1047&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F39%2F2019%2F05%2F20222218%2F1-YellowMounds.jpg',
      parkCode: 'badl',
      visited: true,
      bucketList: false
    }
  ]

  const mockBucketList = [
    {
      name: 'Acadia',
      state: 'ME',
      image: 'https://www.national-park.com/wp-content/uploads/2016/04/Welcome-to-Acadia-National-Park.jpeg',
      parkCode: 'acad',
      visited: true,
      bucketList: true
    }
  ]

  describe('Visited', () => {
    beforeEach(() => {
      const history = createMemoryHistory()
      history.location.pathname = '/user/visited'
      render(
        <Router history={history}>
          <SavedParks
            visitedList={mockVisited}
            bucketList={mockBucketList}
            addToVisited={addToVisited}
            deleteFromVisited={deleteFromVisited}
            addToBucketList={addToBucketList}
            deleteFromBucketList={deleteFromBucketList}
          />
        </Router>
      )
    })

    it('should render the users visited parks', () => {
      const visitedParkCard = screen.getByAltText('photograph of Badlands')
      expect(visitedParkCard).toBeInTheDocument()
    })
  })

  describe('BucketList', () => {
    beforeEach(() => {
      const history = createMemoryHistory()
      history.location.pathname = '/user/bucket-list'
      render(
        <Router history={history}>
          <SavedParks
            visitedList={mockVisited}
            bucketList={mockBucketList}
            addToVisited={addToVisited}
            deleteFromVisited={deleteFromVisited}
            addToBucketList={addToBucketList}
            deleteFromBucketList={deleteFromBucketList}
          />
        </Router>
      )
    })

    it('should render the users bucket list parks', () => {
      const bucketListParkCard = screen.getByAltText('photograph of Acadia')
      expect(bucketListParkCard).toBeInTheDocument()
    })
  })
})