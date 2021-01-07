import './ParkContainer.scss'
import Banner from '../Banner/Banner'
import UserNav from '../UserNav/UserNav'
import ParkInfo from '../ParkInfo/ParkInfo'
import React, { useState, useEffect, Fragment } from 'react'
import { ParkCode, Name, Activities, Contacts, Images, CurrentPark } from './interfaces'
import { parkRequest } from './npsApiCall'

type ParkContainerProps = ParkCode | Name | Activities | Contacts | Images | CurrentPark

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
      <Fragment>
      <Banner 
        currentPark={currentPark} />
      <UserNav />
      <ParkInfo 
        currentPark={currentPark} />
      </Fragment>
      }
    </section>
  )
}

export default ParkContainer