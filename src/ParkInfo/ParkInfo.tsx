import './ParkInfo.scss'
import About from '../About/About'
import Location from '../Location/Location'
import Contact from '../Contact/Contact'
import BannerIcons from '../BannerIcons/BannerIcons'
import { Switch, Route } from 'react-router-dom'
import { AddToVisited, CurrentParkContainer, LocalParkData } from '../interfaces'
import { RouteComponentProps } from 'react-router-dom'

type ParkInfoProps = CurrentParkContainer | RouteComponentProps | AddToVisited | { deleteFromVisited: (parkCode: string) => void } | { localPark: () => any | void}

const ParkInfo: React.FC<ParkInfoProps> = props => {
  const { currentPark } = props as CurrentParkContainer
  const { addToVisited } = props as AddToVisited
  const { deleteFromVisited } = props as any
  const { localPark } = props as any
  
  return (
    <section className='park-info'>
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
      <BannerIcons
        addToVisited={addToVisited}
        deleteFromVisited={deleteFromVisited}
        localPark={localPark}
      />
    </section>
  )
}

export default ParkInfo