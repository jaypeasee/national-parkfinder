import './ParkInfo.scss'
import About from '../About/About'
import Location from '../Location/Location'
import Contact from '../Contact/Contact'
import BannerIcons from '../BannerIcons/BannerIcons'
import { Switch, Route } from 'react-router-dom'
import { AddRemoveFunctionality, CurrentParkContainer } from '../interfaces'

type ParkInfoProps = CurrentParkContainer | AddRemoveFunctionality | { localPark: () => any | void}

const ParkInfo: React.FC<ParkInfoProps> = props => {
  const { currentPark } = props as CurrentParkContainer
  const { addToVisited } = props as AddRemoveFunctionality
  const { deleteFromVisited } = props as AddRemoveFunctionality
  const { addToBucketList } = props as AddRemoveFunctionality
  const { deleteFromBucketList } = props as AddRemoveFunctionality
  const { localPark } = props as any
  
  return (
    <section className='park-info'>
      <Switch>
        <Route
          exact
          path={`/park/${currentPark.parkCode}/about`}
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
          path={`/park/${currentPark.parkCode}/location`}
          render={() => {
            return (
              <Location
                currentPark={currentPark} />
            )
          }}
        />
        <Route
          exact
          path={`/park/${currentPark.parkCode}/contact`}
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
        addToBucketList={addToBucketList}
        deleteFromBucketList={deleteFromBucketList}
        localPark={localPark}
      />
    </section>
  )
}

export default ParkInfo