import { LocalParkData, AddRemoveFunctionality } from '../interfaces'
import './SavedCard.scss'

type SavedCardProps = LocalParkData | AddRemoveFunctionality

const SavedCard: React.FC<SavedCardProps> = props => {
  const { name, parkCode, image, state, bucketList, visited } = props as LocalParkData
  const { addToVisited, deleteFromVisited, addToBucketList, deleteFromBucketList } = props as AddRemoveFunctionality
  return (
    <section
      id={parkCode}
      className="saved-park-card"
    >
      <img
        src={image}
        alt={`photograph of ${name}`}
        className="saved-park-img"
      />
      <h2>{name}, {state}</h2>
      <button>X</button>
      {bucketList && !visited &&
        <button
          onClick={() => addToVisited(parkCode)}>
          Add to Visited
      </button>}
    </section>
  )
}

export default SavedCard