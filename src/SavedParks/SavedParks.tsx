import { useEffect, useState } from 'react'
import { LocalParkContainer, LocalParkData } from '../interfaces'
import SavedCard from '../SavedCard/SavedCard'
import { useLocation } from 'react-router-dom'

type VisitedParkProps = LocalParkContainer |  LocalParkData

const VisitedParks: React.FC<VisitedParkProps> = props => {
  const location = useLocation()
  const { visitedList, bucketList} = props as LocalParkContainer
  const [visitedListDisplay, setVisitedListDisplay] = useState<Array<JSX.Element>>([])

  useEffect(() => {
    let parkList = []
    if (location.pathname === '/user/visited') {
      parkList = visitedList
    } else if (location.pathname === '/user/bucket-list') {
      parkList = bucketList
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
          //need a way to tell SavedCard if this is bucket list or saved.
          //so that we can have different button options on each card.
          //maybe location.pathname? that threw an error though.
        />
      })
      setVisitedListDisplay(visitedCards)
  }, [visitedList])

  return (
    <section id={location.pathname === '/user/visited' ? "visited" : "bucket-list"}>
      {visitedListDisplay}
    </section>
  )
}

export default VisitedParks