import { useEffect, useState } from 'react'
import { LocalParkContainer, LocalParkData } from '../interfaces'
import SavedCard from '../SavedCard/SavedCard'

type VisitedParkProps = LocalParkContainer |  LocalParkData

const VisitedParks: React.FC<VisitedParkProps> = props => {
  const { visitedList, bucketList} = props as LocalParkContainer
  const [visitedListDisplay, setVisitedListDisplay] = useState<Array<JSX.Element>>([])
  console.log(visitedListDisplay)


  useEffect(() => {
      const visitedCards = visitedList.map((savedPark: LocalParkData) => {
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