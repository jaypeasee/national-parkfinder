import { nationalParks } from '../ParkData'
import './ParkList.scss'
import ParkBtn from '../ParkBtn/ParkBtn'

interface ChoosePark {
  choosePark: (parkCode: string) => void;
}

interface ParkListProps {
  name: string
  parkCode: string
  image: string
  state: string
}

type Props = ParkListProps | ChoosePark


const ParkList: React.FC<Props> = props => {
  const { choosePark } = props as ChoosePark
  const parksOnDisplay = nationalParks.map(park => {
    return <ParkBtn
      key={park.parkCode}
      name={park.name}
      parkCode={park.parkCode}
      image={park.image}
      state={park.state}
      choosePark={choosePark}
    />
  })
  return (
    <section className="park-list">
      <button className="park-button">randomize</button>
      {parksOnDisplay}
    </section>
  )
}

export default ParkList