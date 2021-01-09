import { useState, useEffect, Fragment } from 'react'
import Banner from '../Banner/Banner'
import UserNav from '../UserNav/UserNav'
import ParkInfo from '../ParkInfo/ParkInfo'
import VisitedParks from '../VisitedParks/VisitedParks'
import { ParkCode, CurrentPark, LocalParkData, LocalParkContainer } from '../interfaces'
import { parkRequest } from './npsApiCall'
import { Switch, Route } from 'react-router-dom'
import './ParkContainer.scss'

//create a function in ParkContainer that adds/deletes new park object to visitedList
//create a local toggle on Banner for visitedList icon to pass actions back up to ParkContainer
//create property "visited: false" on local park data objects
//in VisitedParks map through visited list to create sections
//render the sections with ability to remove

type ParkContainerProps = ParkCode | CurrentPark | LocalParkData | LocalParkContainer

const ParkContainer: React.FC<ParkContainerProps> = props => {
  const [currentPark, setCurrentPark] = useState<CurrentPark>()
  const [visitedList, setVisitedList] = useState<LocalParkContainer[]>([])
  // const [bucketList, setBucketList] = useState<LocalParkContainer>([])
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

  const addToVisited = (addedPark: LocalParkData) => {
    addedPark.visited = true
    setVisitedList([...visitedList, addedPark])
  }

  return (
    <section>
      {currentPark && 
        <Switch>
          <Fragment>
            <Banner 
              currentPark={currentPark} 
              addToVisited={addToVisited}
              />
            <UserNav 
              currentPark={currentPark} />
            <Route 
              path={`/${currentPark.parkCode}`}
              render={() => {
                return (
                  <ParkInfo 
                  currentPark={currentPark} />
                )
              }}
            />
              <Route
                path='/user/visited-list'
                render={() => {
                  return (
                    <VisitedParks 
                      visitedList={visitedList}
                    />
                  )
                }}
              />
          </Fragment>
        </Switch>
      }
    </section>
  )
}

export default ParkContainer