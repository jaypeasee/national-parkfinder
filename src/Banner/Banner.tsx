import './Banner.scss'
import { CurrentParkContainer, LocalParkContainer } from '../interfaces'
import { useEffect, useState } from 'react'
type BannerIconsProps = LocalParkContainer | CurrentParkContainer | { parkCode: string }

const Banner: React.FC<BannerIconsProps> = props => {
  const { currentPark } = props as CurrentParkContainer
  const { images } = currentPark as any
  const [imageIndex, setImageIndex] = useState<number>(0)
  const [numImages, setNumImages] = useState<number>(images.length - 1)
  const [displayImage, setDisplayImage] = useState(images[imageIndex])

  useEffect(() => {
    setImageIndex(0)
    setDisplayImage(images[imageIndex])
    setNumImages(images.length - 1)
  }, [currentPark])

  useEffect(() => {
    setDisplayImage(images[imageIndex])
  }, [imageIndex, images])

  const navigateToImage = (index: number) => {
    setImageIndex(index)
  }

  const returnFullName = () => {
    if (currentPark.parkCode === 'hale') {
      return 'Haleakala National Park'
    } else {
      return currentPark.fullName
    }
  }

  return (
    <section className='banner'>
      <div className='header-container'>
        <h1 className='header'>{returnFullName()}, {currentPark.states}</h1>
        {displayImage && <p className='caption'>
          {displayImage.caption}
        </p>}
      </div>
      <div className='image-container'>
        {imageIndex > 0 &&
          <button 
            onClick={() => navigateToImage(imageIndex - 1)}
            className='nav-img-btn'>
            ❮
          </button>}
        {displayImage && <img
          className='banner-img'
          data-testid='banner-img'
          src={displayImage.url}
          alt={displayImage.altText}
        />}
        {imageIndex !== numImages &&
          <button
            onClick={() => navigateToImage(imageIndex + 1)}
            className='nav-img-btn'>
            ❯
          </button>}
      </div>
    </section>
  )
}

export default Banner