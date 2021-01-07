import './ParkContainer.scss'
import Banner from '../Banner/Banner'
import UserNav from '../UserNav/UserNav'
import ParkInfo from '../ParkInfo/ParkInfo'
import React, { useState, useEffect } from 'react'
import { ParkCode, Activities, Contacts, Images, CurrentPark } from './interfaces'
import { parkRequest } from './npsApiCall'

type Props = ParkCode | Activities | Contacts | Images | CurrentPark

const ParkContainer: React.FC<Props> = props => {
  const [currentPark, setCurrentPark] = useState([] || '')
  const { parkCode } = props as ParkCode

  useEffect(() => {
    parkRequest(parkCode)
      .then(data => setCurrentPark(data.data))  
      .catch(error => setCurrentPark(error.message))
  }, [parkCode])

  return (
    <section>
        <Banner />
        <UserNav />
        <ParkInfo />
    </section>
  )
}

export default ParkContainer;