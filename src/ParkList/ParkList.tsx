import './ParkList.scss'

interface ChoosePark {
  choosePark: (parkCode: string) => void;
}

interface ParksOnDisplay {
   parksOnDisplay: Array<object>
}

interface GenerateRandomParkCode {
  generateRandomParkCode: () => void
}

type ParkListProps = GenerateRandomParkCode | ParksOnDisplay

const ParkList: React.FC<ParkListProps> = props => {
  const { generateRandomParkCode } = props as GenerateRandomParkCode
  const { parksOnDisplay } = props as ParksOnDisplay

  return (
    <section className="park-list">
      <button 
        className="park-button"
        onClick={() => generateRandomParkCode()}>
          randomize
      </button>
      {parksOnDisplay}
    </section>
  )
}

export default ParkList