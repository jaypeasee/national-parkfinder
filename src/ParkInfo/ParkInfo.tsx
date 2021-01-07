import './ParkInfo.scss'
import About from '../About/About'
import { CurrentPark, Name, CurrentParkContainer, Images, ImageObject } from '../ParkContainer/interfaces'

type ParkInfoProps = CurrentPark | CurrentParkContainer | Name | Images | ImageObject

const ParkInfo: React.FC<ParkInfoProps> = props => {
    const { currentPark } = props as CurrentParkContainer
    return (
        <section>
            {/* <About /> */}
            <p><b>About {currentPark.name}:</b>{currentPark.description}</p>
            <p><b>Weather Info:</b>{currentPark.weatherInfo}</p>
        </section>
    )
}

export default ParkInfo