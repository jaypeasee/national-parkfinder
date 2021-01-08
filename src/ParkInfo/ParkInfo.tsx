import './ParkInfo.scss'
import About from '../About/About'
import { CurrentParkContainer } from '../interfaces'

const ParkInfo: React.FC<CurrentParkContainer> = props => {
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