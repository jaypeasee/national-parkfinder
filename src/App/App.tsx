import './App.scss'
import React, { useState, useEffect, Fragment } from 'react'
import MainNav from '../MainNav/MainNav'
import ParkContainer from '../ParkContainer/ParkContainer'



function App() {
  return (
    <div className="body">
      <MainNav />
      <ParkContainer />
    </div>
  )
}

export default App
