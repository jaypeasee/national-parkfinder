import './ParkInfo.scss'
import About from '../About/About'
import Location from '../Location/Location'
import Contact from '../Contact/Contact'
import { Switch, Route } from 'react-router-dom'
import { CurrentParkContainer } from '../interfaces'
import { RouteComponentProps } from 'react-router-dom'

type ParkInfoProps = CurrentParkContainer | RouteComponentProps

const ParkInfo: React.FC<ParkInfoProps> = props => {
    const { currentPark } = props as CurrentParkContainer
    return (
        <section>
            <p><b>About {currentPark.name}:</b>{currentPark.description}</p>
            <p><b>Weather Info:</b>{currentPark.weatherInfo}</p>
                <Switch>
                <Route
                    exact 
                    path={`${currentPark.parkCode}/about`}
                    render={() => {
                        return (
                            <About />
                        )
                    }}
                    />
                <Route
                    exact
                    path='/location'
                    render={() => {
                        return (
                            <Location />
                        )
                    }}
                    />
                <Route
                    exact
                    path='/contact'
                    render={() => {
                        return (
                            <Contact />
                        )
                    }}
                    />
            </Switch>
        </section>
    )
}

export default ParkInfo