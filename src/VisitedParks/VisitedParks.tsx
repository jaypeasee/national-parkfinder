import { useEffect, useState } from 'react'
import { LocalParkContainer, LocalParkData } from '../interfaces'
import SavedCard from '../SavedCard/SavedCard'

type VisitedParkProps = LocalParkContainer |  LocalParkData

const VisitedParks: React.FC<VisitedParkProps> = props => {
  const { visitedList, bucketList} = props as LocalParkContainer
  const [cardsOnDisplay, setCardsOnDisplay] = useState<Array<JSX.Element>>()

  useEffect(() => {
    if (visitedList) {
      const visitedCards = visitedList.map((savedPark: LocalParkData) => {
        return <SavedCard
          key={savedPark.parkCode}
          name={savedPark.name}
          image={savedPark.image}
          parkCode={savedPark.parkCode}
          state={savedPark.state}
        />
      })
      setCardsOnDisplay(visitedCards)
    }
  }, [visitedList])

  return (
    <section>
      {visitedList.length > 0 && { cardsOnDisplay }}
    </section>
  )
}

export default VisitedParks