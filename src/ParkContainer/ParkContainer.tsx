import './ParkContainer.scss'
import Banner from '../Banner/Banner'
import UserNav from '../UserNav/UserNav'
import ParkInfo from '../ParkInfo/ParkInfo'
import React, { useState, useEffect } from 'react'

interface ParkCode {
  parkCode: string
}

interface Response {
  response: Array<object>
}

// interface Booking {
//   id: string
//   userID: number
//   date: string
//   roomNumber: string
// }

interface ParkData {
  name: string
  state: string
  parkCode: string
  directionsInfo: string
}

const ParkContainer: React.FC<ParkCode> = props => {
  const [currentPark, setCurrentPark] = useState([])
  const { parkCode } = props as ParkCode

  const request = async () => {
    const response = await fetch(
      `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=2hfS4AxtbC4JiDwsIX0nEC4iVLXP57q8sUoEHUXp`,
    );
    const data = await response.json();
    setCurrentPark(data.data);
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

// const ParkContainer: React.FC<ParkCode> = props => {
//   const [currentPark, setCurrentPark] = useState({})
//   const { parkCode } = props as ParkCode
  
//   useEffect(() => {
//     return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=2hfS4AxtbC4JiDwsIX0nEC4iVLXP57q8sUoEHUXp`)
//     // .then(response => response.json())
//     .then(response => setCurrentPark(response))
//     .catch(error => console.log(error))
//   }, {})

//   return (
//     <section>
//         <Banner />
//         <UserNav />
//         <ParkInfo />
//     </section>
//   )
// }

export default ParkContainer;