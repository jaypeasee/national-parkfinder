import { useState, useEffect, Fragment } from 'react'
import Banner from '../Banner/Banner'
import UserNav from '../UserNav/UserNav'
import ParkInfo from '../ParkInfo/ParkInfo'
import SavedParks from '../SavedParks/SavedParks'
import { ParkCode, CurrentPark, RouteProps } from '../interfaces'
import { parkRequest } from './npsApiCall'
import { Switch, Route, RouteComponentProps, Link } from 'react-router-dom'
import './ParkContainer.scss'


type ParkContainerProps = ParkCode | CurrentPark

const ParkContainer: React.FC<ParkContainerProps> = props => {
  // let ParkInfo = (props: RouteComponentProps) => <div>Home</div>
  // let Dash = (props: RouteComponentProps) => <div>Dash</div>

  const [currentPark, setCurrentPark] = useState<CurrentPark>()
  const { parkCode } = props as ParkCode
  
  useEffect(() => {
    if (parkCode !== '') {
      parkRequest(parkCode)
      .then(data => {
        setCurrentPark(data.data[0])
      })    
      .catch(error => setCurrentPark(error.message))
    } 
  }, [parkCode])

  return (
    <section>
      {currentPark && 
        <Switch>
          <Fragment>
            <Banner 
              currentPark={currentPark} />
            <UserNav />
            <Route
              path={`/:${parkCode}`}
              render={props => {
                <ParkInfo 
                  currentPark={currentPark}{...props} />
              }}
            />
              {/* <Route
                path='/:savedParks'
                render={props => {
                  <SavedParks />
                }}
              /> */}
          </Fragment>
        </Switch>
      }
    </section>
  )
}

export default ParkContainer