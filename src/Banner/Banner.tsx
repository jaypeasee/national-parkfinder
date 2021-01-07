import './Banner.scss'
import { CurrentParkContainer } from '../ParkContainer/interfaces'
import BannerIcons from '../BannerIcons/BannerIcons'

const Banner: React.FC<CurrentParkContainer> = props => {
    const { currentPark } = props as CurrentParkContainer
    const { images } = currentPark as any
  
    return(
        <section>
            {<img 
                className="banner-img"
                src={images[0].url}
                alt={images[0].altText}
            /> }
            <h1>{currentPark.fullName}</h1>
            <BannerIcons />
        </section>
    )
}

export default Banner