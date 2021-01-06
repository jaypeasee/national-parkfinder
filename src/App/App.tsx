import './App.scss'
import React, { useState, useEffect, Fragment } from 'react'
import MainNav from '../MainNav/MainNav'
import ParkContainer from '../ParkContainer/ParkContainer'
// import { Route } from 'react-router-dom'
import { nationalParks } from '../ParkData'

interface ChoosePark {
  choosePark: (parkCode: string) => void
}

const App: React.FC = () => {
  const [park, setPark] = useState('') 
  
  const choosePark = (parkCode: string) => {
   setPark(parkCode)
  }
  return (
    <main className="body">
      <MainNav choosePark={choosePark}/>
      <ParkContainer />
    </main>
  )
}

export default App
