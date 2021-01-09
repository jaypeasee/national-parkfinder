import { LocalParkContainer } from '../interfaces'
import SavedCard from '../SavedCard/SavedCard'


const VisitedParks: React.FC<LocalParkContainer> = props => {
  const { visitedList } = props as LocalParkContainer


    const visitedCards = visitedList.map((visited: any) => {
      return <SavedCard 
        key={visited.parkCode}
        name={visited.name}
        image={visited.image}
        parkCode={visited.parkCode}
        state={visited.state}
      />
    })

   
  return (
    <section>
      {visitedList.length > 0 && {visitedCards}}
    </section>
  )
}

export default VisitedParks