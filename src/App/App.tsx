import './App.scss'
import React, { useState, useEffect, Fragment } from 'react'
import MainNav from '../MainNav/MainNav'
import ParkContainer from '../ParkContainer/ParkContainer'



function App() {
  return (
    <Fragment>
      <MainNav />
      <ParkContainer />
    </Fragment>
  )
}

export default App
