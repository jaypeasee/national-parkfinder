import { useState, useEffect, Fragment } from 'react'
import Banner from '../Banner/Banner'
import UserNav from '../UserNav/UserNav'
import ParkInfo from '../ParkInfo/ParkInfo'
import SavedParks from '../SavedParks/SavedParks'
import { nationalParks } from '../ParkData'
import { CurrentPark, LocalParkData, LocalParkContainer, CurrentParkContainer, AddRemoveFunctionality } from '../interfaces'
import { parkRequest } from './npsApiCall'
import { Switch, Route } from 'react-router-dom'
import './ParkContainer.scss'

type ParkContainerProps = LocalParkContainer | CurrentPark | LocalParkData | CurrentParkContainer | AddRemoveFunctionality | { parkCode: string } | {findChosenPark: (parkCode: string) => void}

const ParkContainer: React.FC<ParkContainerProps> = props => {
  const [currentPark, setCurrentPark] = useState<CurrentPark>()
  const { parkCode } = props as any
  const { findChosenPark } = props as any
  const { addToVisited } = props as AddRemoveFunctionality
  const { deleteFromVisited } = props as AddRemoveFunctionality
  const { addToBucketList } = props as AddRemoveFunctionality
  const { deleteFromBucketList } = props as AddRemoveFunctionality

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
    <section className='park-container'>
      {currentPark &&
        <section>
          <Banner
            currentPark={currentPark} />
          <UserNav
            currentPark={currentPark} />
          <ParkInfo
            currentPark={currentPark}
            localPark={findChosenPark(currentPark.parkCode)}
            addToVisited={addToVisited}
            deleteFromVisited={deleteFromVisited}
            addToBucketList={addToBucketList}
            deleteFromBucketList={deleteFromBucketList} />
        </section>
      }
    </section>
  )
}

export default ParkContainer