import { useState, useEffect, Fragment } from 'react'
import Banner from '../Banner/Banner'
import UserNav from '../UserNav/UserNav'
import ParkInfo from '../ParkInfo/ParkInfo'
import VisitedParks from '../VisitedParks/VisitedParks'
import { nationalParks } from '../ParkData'
import { CurrentPark, LocalParkData, LocalParkContainer, CurrentParkContainer } from '../interfaces'
import { parkRequest } from './npsApiCall'
import { Switch, Route } from 'react-router-dom'
import './ParkContainer.scss'

type ParkContainerProps = LocalParkContainer | CurrentPark | LocalParkData | CurrentParkContainer | { parkCode: string }

const ParkContainer: React.FC<ParkContainerProps> = props => {
  const [currentPark, setCurrentPark] = useState<CurrentPark>()
  const [visitedList, setVisitedList] = useState<LocalParkContainer[]>([])
  const [bucketList, setBucketList] = useState<LocalParkContainer[]>([])
  const { parkCode } = props as any


  useEffect(() => {
    if (parkCode !== '') {
      parkRequest(parkCode)
        .then(data => {
          setCurrentPark(data.data[0])
        })
        .catch(error => setCurrentPark(error.message))
    }
  }, [parkCode])

  const findChosenPark = (parkCode: string): any | void => {
    const chosenPark = nationalParks.find(park => {
      return park.parkCode === parkCode
    })
    if (chosenPark) {
      return chosenPark
    }
  }

  const addToVisited = (parkCode: string) => {
    const addedPark = findChosenPark(parkCode)

    if (!visitedList.includes(addedPark)) {
      setVisitedList([...visitedList, addedPark])
    }
  }

  const deleteFromVisited = (parkCode: string) => {
    const updatedParks = visitedList.filter((park: any) => park.parkCode !== parkCode)
    setVisitedList(updatedParks)
  }

  const addToBucketList = (parkCode: string) => {
    const addedPark = findChosenPark(parkCode)

    if (!bucketList.includes(addedPark)) {
      setBucketList([...bucketList, addedPark])
    }
  }

  const deleteFromBucketList = (parkCode: string) => {
    const updatedParks = bucketList.filter((park: any) => park.parkCode !== parkCode)
    setBucketList(updatedParks)
  }

  return (
    <section className='park-container'>
      {currentPark &&
        <Switch>
          <Fragment>
            <Banner
              currentPark={currentPark}
            />
            <UserNav
              currentPark={currentPark} />
            <Route
              path={`/${currentPark.parkCode}`}
              render={() => {
                return (
                  <ParkInfo
                    currentPark={currentPark}
                    localPark={findChosenPark(currentPark.parkCode)}
                    addToVisited={addToVisited} 
                    deleteFromVisited={deleteFromVisited}
                    addToBucketList={addToBucketList}
                    deleteFromBucketList={deleteFromBucketList}/>
                )
              }}
            />
            <Route
              path='/user/visited'
              render={() => {
                return (
                  <VisitedParks
                    visitedList={visitedList}
                    bucketList={bucketList}
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