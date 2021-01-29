import { useEffect, useState } from 'react'
import { LocalParkContainer, LocalParkData, AddRemoveFunctionality } from '../interfaces'
import SavedCard from '../SavedCard/SavedCard'
import { useLocation } from 'react-router-dom'
import './SavedParks.scss'

type SavedParksProps = LocalParkContainer & AddRemoveFunctionality

const SavedParks: React.FC<SavedParksProps> = props => {
  const [pageTitle, setPageTitle] = useState<string>('')
  const location = useLocation()
  const [parkList, setParkList] = useState<Array<any>>([])
  const { visitedList, bucketList } = props as LocalParkContainer
  const { addToVisited, deleteFromVisited, addToBucketList, deleteFromBucketList } = props as AddRemoveFunctionality

  useEffect(() => {
    if (location.pathname === '/user/visited') {
      setParkList(visitedList)
      setPageTitle('My Visited Parks')
    } else if (location.pathname === '/user/bucket-list') {
      setParkList(bucketList)
      setPageTitle('My Bucket List Parks')
    }
  }, [location.pathname, bucketList, visitedList])
  
  const createCards = () => {
    return parkList.map((savedPark: LocalParkData) => {
      return <SavedCard
        key={savedPark.parkCode}
        name={savedPark.name}
        image={savedPark.image}
        parkCode={savedPark.parkCode}
        state={savedPark.state}
        bucketList={savedPark.bucketList}
        visited={savedPark.visited}
        addToVisited={addToVisited}
        deleteFromVisited={deleteFromVisited}
        addToBucketList={addToBucketList}
        deleteFromBucketList={deleteFromBucketList}
      />
    })
  }

  return (
    <section>
      <h1 style={{textAlign: "center"}}>
        {pageTitle}
      </h1>
      <section className="saved-parks-container">
        { createCards() }
      </section>
    </section>
  )
}

export default SavedParks