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
      <Switch>
        <Route
          exact
          path={`/${currentPark.parkCode}/about`}
          render={() => {
            return (
              <About
                currentPark={currentPark}
              />
            )
          }}
        />
        <Route
          exact
          path={`/${currentPark.parkCode}/location`}
          render={() => {
            return (
              <Location
                currentPark={currentPark} />
            )
          }}
        />
        <Route
          exact
          path={`/${currentPark.parkCode}/contact`}
          render={() => {
            return (
              <Contact
                currentPark={currentPark} />
            )
          }}
        />
      </Switch>
    </section>
  )
}

export default ParkInfo