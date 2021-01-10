import randomizeIcon from './randomize.png'
import './ParkList.scss'

interface ParksOnDisplay {
  parksOnDisplay: Array<JSX.Element>
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
        data-testid="randomize-button"
        className="randomize-button"
        onClick={generateRandomParkCode}>
        <img 
          src={randomizeIcon}
          alt="randomize-icon"
          className='randomize-icon'
        />
      </button>
      {parksOnDisplay}
    </section>
  )
}

export default ParkList