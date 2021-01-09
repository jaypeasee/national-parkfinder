import './BannerIcons.scss'
import { useState } from 'react'
import { LocalParkContainer, LocalParkData, CurrentParkContainer, AddToVisited } from '../interfaces'
import bucketBlack from './icons/bucket-black.png'
import bucketGreen from './icons/bucket-green.png'
import checkBlack from './icons/check-black.png'
import checkGreen from './icons/check-green.png'

type BannerIconsProps = AddToVisited | LocalParkContainer | LocalParkData | CurrentParkContainer | { localPark: () => any | void }


const BannerIcons: React.FC<BannerIconsProps> = props => {
  const { addToVisited } = props as AddToVisited
  const { localPark } = props as any

  const [checkColor, setCheckColor] = useState<any>(checkBlack)

  const handleParkAddition = () => {
    addToVisited(localPark.parkCode)
    localPark.visited = true
    setCheckColor(checkGreen)
  }

  return (
    <section className="banner-icons">
      <div role="button"
        onClick={ handleParkAddition }
        className="banner-btn-container">
        <img
          src={checkColor}
          alt="not checked"
          className="saved-icon"
        />
        <h2>Add To Visited</h2>
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