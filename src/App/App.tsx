import React, { useState, useEffect } from 'react'
import MainNav from '../MainNav/MainNav'
import ParkContainer from '../ParkContainer/ParkContainer'
import SavedParks from '../SavedParks/SavedParks'
import Footer from '../Footer/Footer'
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'
import { nationalParks } from '../ParkData'
import './App.scss'
import { LocalParkContainer } from '../interfaces'

const App: React.FC<LocalParkContainer> = () => {
  const [visitedList, setVisitedList] = useState<LocalParkContainer[] | any>([])
  const [bucketList, setBucketList] = useState<LocalParkContainer[] | any>([])
  const location = useLocation()
  const history = useHistory()
  
  useEffect(() => {
    retrieveFromStorage()
  }, [])

  useEffect(() => {
    if (location.pathname === '/') {
      generateRandomParkCode()
    } 
  })

  useEffect(() => {
    saveToStorage()
  }, [visitedList, bucketList])

  const generateRandomParkCode = (): void => {
    let index = Math.floor(Math.random() * nationalParks.length)
    history.push(`/park/${nationalParks[index].parkCode}`)
  }

  const findChosenPark = (parkCode: string): any | void => {
    const chosenPark = nationalParks.find(park => {
      return park.parkCode === parkCode
    })
    if (chosenPark) {
      return chosenPark
    }
  }

  const addToVisited = (parkCode: string) => {
    const addedPark = findChosenPark(parkCode)
    addedPark.visited = true
    if (!visitedList.includes(addedPark)) {
      setVisitedList([...visitedList, addedPark])
    }
  }

  const deleteFromVisited = (parkCode: string) => {
    const removedPark = findChosenPark(parkCode)
    removedPark.visited = false
    const updatedParks = visitedList.filter((park: any) => park.parkCode !== parkCode)
    setVisitedList(updatedParks)
  }

  const addToBucketList = (parkCode: string) => {
    const addedPark = findChosenPark(parkCode)
    addedPark.bucketList = true
    if (!bucketList.includes(addedPark)) {
      setBucketList([...bucketList, addedPark])
    }
  }

  const deleteFromBucketList = (parkCode: string) => {
    const removedPark = findChosenPark(parkCode)
    removedPark.bucketList = false
    const updatedParks = bucketList.filter((park: any) => park.parkCode !== parkCode)
    setBucketList(updatedParks)
  }

  const saveToStorage = () => {
    localStorage.clear()
    let stringifiedVisited = JSON.stringify(visitedList)
    let stringifiedBucketList = JSON.stringify(bucketList)
    localStorage.setItem('visitedList', stringifiedVisited)
    localStorage.setItem('bucketList', stringifiedBucketList)
  }

  const retrieveFromStorage = () => {
    if (localStorage.visitedList) {
      const storedVisited: any = localStorage.getItem('visitedList')
      const parsedVisited = JSON.parse(storedVisited)
      setVisitedList(parsedVisited)
      saveToStorage()
    }
    if (localStorage.bucketList) {
      const storedBucketList: any = localStorage.getItem('bucketList')
      const parsedBucketList = JSON.parse(storedBucketList)
      setBucketList(parsedBucketList)
      saveToStorage()
    }
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
               return (
                <ParkContainer
                  parkCode={match.params.parkCode}
                  visitedList={visitedList}
                  bucketList={bucketList}
                  findChosenPark={findChosenPark}
                  addToVisited={addToVisited}
                  deleteFromVisited={deleteFromVisited}
                  addToBucketList={addToBucketList}
                  deleteFromBucketList={deleteFromBucketList}
                />
              )
            }}
          />
          <Route
            path='/user/visited'
            render={() => {
              return (
                <SavedParks
                  visitedList={visitedList}
                  bucketList={bucketList}
                  addToVisited={addToVisited}
                  deleteFromVisited={deleteFromVisited}
                  addToBucketList={addToBucketList}
                  deleteFromBucketList={deleteFromBucketList}
                />
              )
            }}
          />
          <Route
            path='/user/bucket-list'
            render={() => {
              return (
                <SavedParks
                  visitedList={visitedList}
                  bucketList={bucketList}
                  addToVisited={addToVisited}
                  deleteFromVisited={deleteFromVisited}
                  addToBucketList={addToBucketList}
                  deleteFromBucketList={deleteFromBucketList}
                />
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
