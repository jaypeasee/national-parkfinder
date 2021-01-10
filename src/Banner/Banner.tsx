import './Banner.scss'
import { CurrentParkContainer, LocalParkContainer } from '../interfaces'

type BannerIconsProps = LocalParkContainer | CurrentParkContainer | { parkCode: string }

const Banner: React.FC<BannerIconsProps> = props => {
  const { currentPark } = props as CurrentParkContainer
  const { images } = currentPark as any

  const randomIndex = Math.floor(Math.random() * images.length)

  return (
    <section className='banner'>
      <div className='header-container'>
        <h1 className='header'>{currentPark.fullName}, {currentPark.states}</h1>
        <p className='caption'><i>{images[randomIndex].caption}</i></p>
      </div>
      <div>
        {<img
          className='banner-img'
          src={images[randomIndex].url}
          alt={images[randomIndex].altText}
        />}
      </div>
    </section>
  )
}

export default Banner