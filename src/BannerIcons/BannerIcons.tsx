import './BannerIcons.scss'
import { useEffect, useState } from 'react'
import { AddRemoveFunctionality } from '../interfaces'
import bucketBlack from './icons/bucket-black.png'
import bucketGreen from './icons/bucket-green.png'
import checkBlack from './icons/check-black.png'
import checkGreen from './icons/check-green.png'

type BannerIconsProps = AddRemoveFunctionality | { localPark: () => any | void } 


const BannerIcons: React.FC<BannerIconsProps> = props => {
  const { addToVisited } = props as AddRemoveFunctionality
  const { deleteFromVisited } = props as AddRemoveFunctionality
  const { addToBucketList } = props as AddRemoveFunctionality
  const { deleteFromBucketList } = props as AddRemoveFunctionality
  const { localPark } = props as any

  const [checkColor, setCheckColor] = useState<any>()
  const [bucketColor, setBucketColor] = useState<any>()

  useEffect(() => {
    if (localPark.visited) {
      setCheckColor(checkGreen)
    } else {
      setCheckColor(checkBlack)
    }
  })

  const handleVisitedPark = () => {
    if (!localPark.visited) {
      addToVisited(localPark.parkCode)
      localPark.visited = true
    } else {
      deleteFromVisited(localPark.parkCode)
      localPark.visited = false
    }
  }

  return (
    <section className="banner-icons">
      <div role="button"
        onClick={ handleVisitedPark }
        className="banner-btn-container">
        <img
          src={checkColor}
          alt="not checked"
          className="saved-icon"
        />
        {!localPark.visited && <h2>Add To Visited</h2>}
        {localPark.visited && <h2>Remove From Visited</h2>}
      </div>
      <div className="banner-btn-container">
        <img
          src={bucketColor}
          alt="not added to bucket list"
          className="saved-icon"
        />
        {!localPark.bucketList && <h2>Add To Bucket List</h2>}
        {localPark.bucketList && <h2>Remove From Bucket List</h2>}
      </div>
    </section>
  )
}

export default BannerIcons