import './BannerIcons.scss'
import { useEffect, useState } from 'react'
import { LocalParkContainer, LocalParkData, CurrentParkContainer, AddToVisited } from '../interfaces'
import bucketBlack from './icons/bucket-black.png'
import bucketGreen from './icons/bucket-green.png'
import checkBlack from './icons/check-black.png'
import checkGreen from './icons/check-green.png'

type BannerIconsProps = AddToVisited | LocalParkContainer | LocalParkData | CurrentParkContainer | { localPark: () => any | void } | { deleteFromVisited: () => void }


const BannerIcons: React.FC<BannerIconsProps> = props => {
  const { addToVisited } = props as AddToVisited
  const { deleteFromVisited } = props as any
  const { localPark } = props as any

  const [checkColor, setCheckColor] = useState<any>()

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
          src={bucketBlack}
          alt="not added to bucket list"
          className="saved-icon"
        />
        <h2>Add To Bucket List</h2>
      </div>
    </section>
  )
}

export default BannerIcons