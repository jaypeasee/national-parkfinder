import { LocalParkContainer } from '../interfaces'

const VisitedParks: React.FC<LocalParkContainer> = props => {
  const { visitedList } = props
  
  return (
    <section>
      <h1>yay saved parks</h1>
    </section>
  )
}

export default VisitedParks