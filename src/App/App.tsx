import './App.scss'
import React, { useState, useEffect } from 'react'
import MainNav from '../MainNav/MainNav'
import ParkContainer from '../ParkContainer/ParkContainer'
import Footer from '../Footer/Footer'
import { Route, Switch, useLocation } from 'react-router-dom'
import { nationalParks } from '../ParkData'

const App: React.FC = () => {
  const [parkCode, setParkCode] = useState<string>('')
  const location = useLocation()
  const choosePark = (parkCodeId: string) => {
    setParkCode(parkCodeId)
  }

  useEffect(() => {
    if (location.pathname === '/') {
      generateRandomParkCode()
      location.pathname = `/${parkCode}`
    } else {
      setParkCode(location.pathname.split('/')[1])
    }
  }, [parkCode])

  const generateRandomParkCode = (): void => {
      let index = Math.floor(Math.random() * nationalParks.length)
      setParkCode(nationalParks[index].parkCode)
  }

  return (
    <main className='app'>
      <body className='body'>
        <MainNav
          choosePark={choosePark}
          generateRandomParkCode={generateRandomParkCode} />
        <Switch>
          <Route
            path={location.pathname}
            render={() => {
              return (
                <ParkContainer
                  parkCode={parkCode} />
              )
            }}
          />
        </Switch>
      </body>
      <Footer />
    </main>
  )
}

export default App
