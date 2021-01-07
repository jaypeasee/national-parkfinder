import './Banner.scss'
import { CurrentPark, Name } from '../ParkContainer/interfaces'
import BannerIcons from '../BannerIcons/BannerIcons'

type BannerProps = Name | CurrentPark

const Banner: React.FC<CurrentPark> = props => {
    // const { fullName } = props as CurrentPark
    const { currentPark } = props as CurrentPark
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