import './Banner.scss'
import { CurrentParkContainer, LocalParkContainer, LocalParkData } from '../interfaces'
import BannerIcons from '../BannerIcons/BannerIcons'

interface AddToVisited {
  addToVisited: (addedPark: LocalParkData) =>  void
}

type BannerIconsProps = AddToVisited | LocalParkContainer | CurrentParkContainer

const Banner: React.FC<BannerIconsProps> = props => {
    const { currentPark } = props as CurrentParkContainer
    const { images } = currentPark as any
    const { addToVisited } = props as AddToVisited

    return(
        <section>
            {<img 
                className="banner-img"
                src={images[0].url}
                alt={images[0].altText}
            /> }
            <h1>{currentPark.fullName}, {currentPark.states}</h1>
            <BannerIcons 
              addToVisited={addToVisited}

            />
        </section>
    )
}

export default Banner