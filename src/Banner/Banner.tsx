import './Banner.scss'
import { CurrentPark, Name, CurrentParkContainer, Images, ImageObject} from '../ParkContainer/interfaces'
import BannerIcons from '../BannerIcons/BannerIcons'

type BannerProps = CurrentPark | CurrentParkContainer | Name | Images | ImageObject

const Banner: React.FC<BannerProps> = props => {
console.log(props)
    const { currentPark } = props as CurrentParkContainer
    const { images } = currentPark as any
    console.log('url', images[0])

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