import './App.scss'
import React, { useEffect } from 'react'
import MainNav from '../MainNav/MainNav'
import ParkContainer from '../ParkContainer/ParkContainer'
import Footer from '../Footer/Footer'
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'
import { nationalParks } from '../ParkData'

const App: React.FC = () => {
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (location.pathname === '/') {
      generateRandomParkCode()
    } 
  })

  const generateRandomParkCode = (): void => {
    let index = Math.floor(Math.random() * nationalParks.length)
    history.push(`/park/${nationalParks[index].parkCode}`)
  }

  return (
    <main className='app'>
      <section className='body'>
        <MainNav
          generateRandomParkCode={generateRandomParkCode} />
        <Switch>
          <Route
            path='/park/:parkCode'
            render={({ match }) => {
              const chosenPark = nationalParks.find(park => {
                return park.parkCode === match.params.parkCode
              })
              let parkCode = !chosenPark ? generateRandomParkCode() : match.params.parkCode
              return (
                <ParkContainer
                  parkCode={match.params.parkCode} />
              )
            }}
          />
          <Route
            path='/user/:list'
            render={() => {
              return (
                <ParkContainer parkCode={''}/>
              )
            }}
          />
        </Switch>
      </section>
      <Footer />
    </main>
  )
}

export default App
