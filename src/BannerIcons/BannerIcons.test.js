import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BannerIcons from './BannerIcons'

describe('BannerIcons', () => {
  let visitedBtn
  let bucketListBtn
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
      <BannerIcons
        addToVisited={addToVisited}
        deleteFromVisited={deleteFromVisited}
        addToBucketList={addToBucketList}
        deleteFromBucketList={deleteFromBucketList}
        localPark={localPark}
      />
    )
    visitedBtn = screen.getByAltText('visited')
    bucketListBtn = screen.getByAltText('bucket list')
  })

  it('should render BannerIcons', () => {
    expect(visitedBtn).toBeInTheDocument()
    expect(bucketListBtn).toBeInTheDocument()
  })

  it('should allow a user to add and delete a park to visited', () => {
    userEvent.click(visitedBtn)
    expect(addToVisited).toHaveBeenCalledWith('dena')
    expect(addToVisited).toHaveBeenCalledTimes(1)

    userEvent.click(visitedBtn)
    expect(deleteFromVisited).toHaveBeenCalledWith('dena')
    expect(deleteFromVisited).toHaveBeenCalledTimes(1)
  })

  it('should allow a user to add and delete a park to bucket list', () => {
    userEvent.click(bucketListBtn)
    expect(addToBucketList).toHaveBeenCalledWith('dena')
    expect(addToBucketList).toHaveBeenCalledTimes(1)

    userEvent.click(bucketListBtn)
    expect(deleteFromBucketList).toHaveBeenCalledWith('dena')
    expect(deleteFromBucketList).toHaveBeenCalledTimes(1)
  })
})