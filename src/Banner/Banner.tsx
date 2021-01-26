import './Banner.scss'
import { CurrentParkContainer, LocalParkContainer } from '../interfaces'
import { useState } from 'react'
type BannerIconsProps = LocalParkContainer | CurrentParkContainer | { parkCode: string }

const Banner: React.FC<BannerIconsProps> = props => {
  const { currentPark } = props as CurrentParkContainer
  const { images } = currentPark as any
  const [displayImage, setDisplayImage] = useState(images[0])
  const randomIndex: number = Math.floor(Math.random() * images.length)

  const nextImage = () => {
    // to see how many pictures are in the array
    // setDisplayImage to next object in array
  }

  return (
    <section className='banner'>
      <div className='header-container'>
        <h1 className='header'>{currentPark.fullName}, {currentPark.states}</h1>
        <p className='caption'>
          {images[0].caption}
        </p>
      </div>
      <div className='image-container'>
        <img
          className='banner-img'
          data-testid='banner-img'
          src={images[0].url}
          alt={images[0].altText}
        />
      </div>
    </section>
  )
}

export default Banner