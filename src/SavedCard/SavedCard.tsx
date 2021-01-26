import { LocalParkData, AddRemoveFunctionality } from '../interfaces'
import './SavedCard.scss'
import { useLocation, Link } from 'react-router-dom'

type SavedCardProps = LocalParkData | AddRemoveFunctionality

const SavedCard: React.FC<SavedCardProps> = props => {
  const location = useLocation()
  const { name, parkCode, image, state, bucketList, visited } = props as LocalParkData
  const { addToVisited, deleteFromVisited, deleteFromBucketList } = props as AddRemoveFunctionality

  const moveParkToVisited = () => {
    deleteFromBucketList(parkCode)
    addToVisited(parkCode)
  }

  return (
    <section
      id={parkCode}
      className="saved-park-card">
      <img
        src={image}
        alt={`photograph of ${name}`}
        className="saved-park-img"
      />
      <h2>{name}, {state}</h2>
      <Link
        to={`/park/${parkCode}`}
      >
        {`Go to ${name}'s page`}
      </Link>
      {location.pathname === '/user/visited' && <button
        onClick={() => deleteFromVisited(parkCode)}>
        Delete from Visited
      </button>}
      {location.pathname === '/user/bucket-list' && <button
        onClick={() => deleteFromBucketList(parkCode)}>
        Delete from Bucket List
      </button>}
      {bucketList && !visited &&
        <button
          onClick={moveParkToVisited}
          data-testid='add-to-visited-from-bucket-list'>
          Add to Visited
      </button>}
    </section>
  )
}

export default SavedCard