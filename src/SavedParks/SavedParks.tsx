import { useEffect, useState } from 'react'
import { LocalParkContainer, LocalParkData, AddRemoveFunctionality } from '../interfaces'
import SavedCard from '../SavedCard/SavedCard'
import { useLocation } from 'react-router-dom'

const SavedParks: React.FC<LocalParkContainer & AddRemoveFunctionality> = props => {
  let pageTitle: string = ''
  const location = useLocation()
  const { visitedList, bucketList } = props as LocalParkContainer
  const { addToVisited, deleteFromVisited, addToBucketList, deleteFromBucketList } = props as AddRemoveFunctionality
  const [visitedListDisplay, setVisitedListDisplay] = useState<Array<JSX.Element>>([])

  useEffect(() => {
    let parkList = []
    if (location.pathname === '/user/visited') {
      parkList = visitedList
      pageTitle = 'My Visited Parks'
    } else if (location.pathname === '/user/bucket-list') {
      parkList = bucketList
      pageTitle = 'My Bucket List Parks'
    }
    // console.log(pageTitle)
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
  }, [visitedList])

  return (
    <section id={location.pathname === '/user/visited' ? "visited" : "bucket-list"}>
      <h1>
        {pageTitle}
      </h1>
      {visitedListDisplay}
    </section>

  )
}

export default SavedParks