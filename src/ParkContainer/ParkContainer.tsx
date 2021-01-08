import { useState, useEffect, Fragment } from 'react'
import Banner from '../Banner/Banner'
import UserNav from '../UserNav/UserNav'
import ParkInfo from '../ParkInfo/ParkInfo'
import SavedParks from '../SavedParks/SavedParks'
import { ParkCode, CurrentPark } from '../interfaces'
import { parkRequest } from './npsApiCall'
import { Switch, Route } from 'react-router-dom'
import './ParkContainer.scss'
import { nationalParks } from '../ParkData'


type ParkContainerProps = ParkCode | CurrentPark

const ParkContainer: React.FC<ParkContainerProps> = props => {

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
            <UserNav 
              currentPark={currentPark} />
            <Route
              exact 
              path='/:matchedCode/about'
              render={({match}) => {
                const matchedCode = nationalParks.find(park => {
                  return park.parkCode === match.params.parkCode})
                  console.log(matchedCode)
                return (
                  <ParkInfo 
                  currentPark={currentPark} />
                )
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