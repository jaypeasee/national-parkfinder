import { useEffect, useState } from 'react'
import { LocalParkContainer, LocalParkData } from '../interfaces'
import SavedCard from '../SavedCard/SavedCard'
import { useLocation } from 'react-router-dom'

type VisitedParkProps = LocalParkContainer |  LocalParkData

const VisitedParks: React.FC<VisitedParkProps> = props => {
  const location = useLocation()
  const { visitedList, bucketList} = props as LocalParkContainer
  const [visitedListDisplay, setVisitedListDisplay] = useState<Array<JSX.Element>>([])
  console.log(bucketList)


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
        />
      })
      setVisitedListDisplay(visitedCards)
  }, [visitedList])

  return (
    <section>
      {visitedListDisplay}
    </section>
  )
}

export default VisitedParks