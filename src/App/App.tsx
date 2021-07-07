import React, { useState, useEffect } from 'react'
import MainNav from '../MainNav/MainNav'
import ParkContainer from '../ParkContainer/ParkContainer'
import SavedParks from '../SavedParks/SavedParks'
import Footer from '../Footer/Footer'
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'
import { nationalParks } from '../ParkData'
import { LocalParkContainer } from '../interfaces'
import './App.scss'

const App: React.FC<LocalParkContainer> = () => {
  const [visitedList, setVisitedList] = useState<LocalParkContainer[] | any>([])
  const [bucketList, setBucketList] = useState<LocalParkContainer[] | any>([])
  const location = useLocation()
  const history = useHistory()
  
  useEffect(() => {
    retrieveFromStorage()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (location.pathname === '/') {
      generateRandomParkCode()
    } 
  }, [location.pathname])// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    updateLocalVisitedParks()
    updateLocalBucketListParks()
    saveToStorage()
  }, [visitedList, bucketList])// eslint-disable-line react-hooks/exhaustive-deps

  const generateRandomParkCode = (): void => {
    let index = Math.floor(Math.random() * nationalParks.length)
    history.push(`/park/${nationalParks[index].parkCode}/about`)
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
    }
    if (localStorage.bucketList) {
      const storedBucketList: any = localStorage.getItem('bucketList')
      const parsedBucketList = JSON.parse(storedBucketList)
      setBucketList(parsedBucketList)
    }
    saveToStorage()
  }

  const updateLocalVisitedParks = () => {
    if (localStorage.visitedList) {
      return nationalParks.map(park => {
        return visitedList.forEach(visitedPark => {
          if (visitedPark.parkCode === park.parkCode) {
            return park.visited = true
          }
        })
      }) 
    }
  }

  const updateLocalBucketListParks = () => {
    if (localStorage.bucketList) {
      return nationalParks.map(park => {
        return bucketList.forEach(bucketListPark => {
          if (bucketListPark.parkCode === park.parkCode) {
            return park.bucketList = true
          }
        })
      })
    }
  }

  return (
    <main className='app'>
      <section className='body'>
        <MainNav
          generateRandomParkCode={generateRandomParkCode} />
        <Switch>
          <Route
            exact
            path='/'
          />
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
            exact
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
            exact
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
          <Route
            path='/'
            render={() => 
              <h1>Page not found</h1>
            }
          />
        </Switch>
      </section>
      <Footer />
    </main>
  )
}

export default App
