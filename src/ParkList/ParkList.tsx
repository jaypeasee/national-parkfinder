import { nationalParks } from '../ParkData'
import './ParkList.scss'
import ParkBtn from '../ParkBtn/ParkBtn'

function ParkList() {
  const parksOnDisplay = nationalParks.map(park => {
    return <ParkBtn
      name={park.name}
      parkCode={park.parkCode}
      image={park.image}
      state={park.state}
    />
  })
  return (
    <section>
      {parksOnDisplay}
    </section>
  )
}

export default ParkList