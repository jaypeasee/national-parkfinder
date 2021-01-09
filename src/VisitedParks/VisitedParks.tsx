import { LocalParkContainer } from '../interfaces'
import SavedCard from '../SavedCard/SavedCard'




const VisitedParks: React.FC<LocalParkContainer> = props => {
  const { visitedList } = props as LocalParkContainer


    const visitedCards = visitedList.map(visited => {
      return <SavedCard 
        key={visited.parkCode}
        name={visited.name}
        image={visited.image}
      />
    })

   
  return (
    <section>
      {visitedCards}
    </section>
  )
}

export default VisitedParks