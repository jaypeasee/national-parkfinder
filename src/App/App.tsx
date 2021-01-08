import './App.scss'
import React, { useState, useEffect } from 'react'
import MainNav from '../MainNav/MainNav'
import ParkContainer from '../ParkContainer/ParkContainer'
import { Route, Switch } from 'react-router-dom'
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

  return (
    <main className="body">
      <MainNav choosePark={choosePark}/>
      <Switch>
        <Route
          // exact
          path='/'
          render={ () => {
            if (!parkCode) {
              generateRandomParkCode()
            }
            return (
              <ParkContainer parkCode={parkCode}/>
            )
          }}
        />
        {/* <Route 
          path='/'
          render={ () => {
            return (
              <ParkContainer parkCode={parkCode}/>
            )
          }}
        /> */}
      </Switch>
    </main>
  )
}

export default App
