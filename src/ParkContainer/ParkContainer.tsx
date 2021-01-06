import './ParkContainer.scss'
import Banner from '../Banner/Banner'
import UserNav from '../UserNav/UserNav'
import ParkInfo from '../ParkInfo/ParkInfo'
import React, { useState, useEffect } from 'react'
import { ParkCode, Activities, Contacts, Images, CurrentPark } from './interfaces'

type Props = ParkCode | Activities | Contacts | Images | CurrentPark

const ParkContainer: React.FC<Props> = props => {
  const [currentPark, setCurrentPark] = useState([] || '')
  // const [error, setError] = useState('')
  const { parkCode } = props as ParkCode
  const request = async () => {
    const response = await fetch(
      // `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=C7eGnlc0BVmtjubOSmuD8P6UPmcRfLM4ewoeNBuI`,
      `https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings`
    )
    const data = await response.json()
    .catch(error => setCurrentPark(error.message))
    setCurrentPark(data.bookings)
    // setCurrentPark(data.data)
    return data
  }

  useEffect(() => {
    request()
  })

  return (
    <section>
        <Banner />
        <UserNav />
        <ParkInfo />
    </section>
  )
}

export default ParkContainer;