import './Banner.scss'
import { CurrentPark, Name, CurrentParkContainer } from '../ParkContainer/interfaces'
import BannerIcons from '../BannerIcons/BannerIcons'

type BannerProps = CurrentPark | CurrentParkContainer | Name

const Banner: React.FC<BannerProps> = props => {

    const { currentPark } = props as CurrentParkContainer
    // const { currentPark } = props as CurrentParkContainer
    // const { fullName } = props as Name
    // const { url, altText } = props as Images
    return(
        <section>
            {/* <img 
                className="banner-img"
                src={url}
                alt={altText}
            /> */}
            <h1>{currentPark.fullName}</h1>
            <BannerIcons />
        </section>
    )
}

export default Banner