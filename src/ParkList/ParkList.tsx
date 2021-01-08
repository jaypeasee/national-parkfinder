import { nationalParks } from '../ParkData'
import './ParkList.scss'
import ParkBtn from '../ParkBtn/ParkBtn'
import { LocalParkData } from '../interfaces'

interface ChoosePark {
  choosePark: (parkCode: string) => void;
}

type Props = LocalParkData | ChoosePark

const ParkList: React.FC<Props> = props => {
  const { choosePark } = props as ChoosePark
  const parksOnDisplay = nationalParks.map(park => {
    return <ParkBtn
      key={park.parkCode}
      name={park.name}
      parkCode={park.parkCode}
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