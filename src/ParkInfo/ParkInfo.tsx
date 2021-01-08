import './ParkInfo.scss'
import About from '../About/About'
// import { Switch, Route } from 'react-router-dom'
import { CurrentParkContainer } from '../interfaces'
import { RouteComponentProps } from 'react-router-dom'

type ParkInfoProps = CurrentParkContainer | RouteComponentProps

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