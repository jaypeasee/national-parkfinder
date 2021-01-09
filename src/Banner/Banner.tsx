import './Banner.scss'
import { CurrentParkContainer, LocalParkContainer, LocalParkData, AddToVisited } from '../interfaces'
import BannerIcons from '../BannerIcons/BannerIcons'

type BannerIconsProps = AddToVisited | LocalParkContainer | CurrentParkContainer | { parkCode: string }

const Banner: React.FC<BannerIconsProps> = props => {
  const { currentPark } = props as CurrentParkContainer
  const { images } = currentPark as any
  const { parkCode } = props as any
  const { addToVisited } = props as AddToVisited

  return (
    <section>
      {<img
        className="banner-img"
        src={images[0].url}
        alt={images[0].altText}
      />}
      <h1>{currentPark.fullName}, {currentPark.states}</h1>
      <BannerIcons
        addToVisited={addToVisited}
        parkCode={parkCode}
      />
    </section>
  )
}

export default Banner