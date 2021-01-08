import './ParkList.scss'

interface ChoosePark {
  choosePark: (parkCode: string) => void;
}

interface ParksOnDisplay {
   parksOnDisplay: Array<object>
}

type ParkListProps = ChoosePark | ParksOnDisplay

const ParkList: React.FC<ParkListProps> = props => {
  const { choosePark } = props as ChoosePark
  const { parksOnDisplay } = props as ParksOnDisplay

  return (
    <section className="park-list">
      <button className="park-button">randomize</button>
      {parksOnDisplay}
    </section>
  )
}

export default ParkList