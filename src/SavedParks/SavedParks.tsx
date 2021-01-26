import { useEffect, useState } from 'react'
import { LocalParkContainer, LocalParkData, AddRemoveFunctionality } from '../interfaces'
import SavedCard from '../SavedCard/SavedCard'
import { useLocation } from 'react-router-dom'
import './SavedParks.scss'

type SavedParksProps = LocalParkContainer & AddRemoveFunctionality | { retrieveFromStorage: () => void }

const SavedParks: React.FC<SavedParksProps> = props => {
  const [pageTitle, setPageTitle] = useState<string>('My Parks')
  const location = useLocation()
  const [parkList, setParkList] = useState<Array<any>>([])
  const { visitedList, bucketList } = props as LocalParkContainer
  const { addToVisited, deleteFromVisited, addToBucketList, deleteFromBucketList } = props as AddRemoveFunctionality
  const [visitedListDisplay, setVisitedListDisplay] = useState<Array<JSX.Element>>([])
  const { retrieveFromStorage } = props as any
  
  useEffect(() => {
    if (location.pathname === '/user/visited') {
      setParkList(visitedList)
      setPageTitle('My Visited Parks')
    } else if (location.pathname === '/user/bucket-list') {
      setParkList(bucketList)
      setPageTitle('My Bucket List Parks')
    }

      const visitedCards = parkList.map((savedPark: LocalParkData) => {
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
      setVisitedListDisplay(visitedCards)
  }, [visitedList, bucketList])

  useEffect(() => {
    retrieveFromStorage()
  }, [])

  return (
    <section>
      <h1 style={{textAlign: "center"}}>
        {pageTitle}
      </h1>
      <section className="saved-parks-container">
        {visitedListDisplay}
      </section>
    </section>
  )
}

export default SavedParks