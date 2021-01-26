import './Banner.scss'
import { CurrentParkContainer, LocalParkContainer } from '../interfaces'
type BannerIconsProps = LocalParkContainer | CurrentParkContainer | { parkCode: string }

const Banner: React.FC<BannerIconsProps> = props => {
  const { currentPark } = props as CurrentParkContainer
  const { images } = currentPark as any

  const randomIndex: number = Math.floor(Math.random() * images.length)

  return (
    <section className='banner'>
      <div className='header-container'>
        <h1 className='header'>{currentPark.fullName}, {currentPark.states}</h1>
        <p className='caption'>
          {images[randomIndex].caption}
        </p>
      </div>
      <div className='image-container'>
        {images[randomIndex] ? <img
          className='banner-img'
          data-testid='banner-img'
          src={images[randomIndex].url}
          alt={images[randomIndex].altText}
        /> : <h1>Loading...</h1>}
      </div>
    </section>
  )
}

export default Banner