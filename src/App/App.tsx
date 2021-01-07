import './App.scss'
import React, { useState, useEffect } from 'react'
import MainNav from '../MainNav/MainNav'
import ParkContainer from '../ParkContainer/ParkContainer'
// import { Route } from 'react-router-dom'
import { nationalParks } from '../ParkData'
import { parkRequest } from '../ParkContainer/npsApiCall'

interface ChoosePark {
  choosePark: (parkCode: string) => void
}

interface Park {
  parkCode: string;
}

const App: React.FC = () => {
  const [parkCode, setParkCode] = useState('')
  
  const choosePark = (parkCodeId: string) => {
   setParkCode(parkCodeId)
  }

  const generateRandomParkCode = () => {
    let index = Math.floor(Math.random() * nationalParks.length)
    setParkCode(nationalParks[index].parkCode)
  }

  useEffect(() => {
    if (parkCode === '') {
      generateRandomParkCode()
    }
  }, [parkCode])

  return (
    <main className="body">
      <MainNav choosePark={choosePark}/>
      <ParkContainer parkCode={parkCode}/>
    </main>
  )
}

export default App
