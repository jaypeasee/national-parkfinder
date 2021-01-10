import { LocalParkData } from '../interfaces'
import './SavedCard.scss'

const SavedCard: React.FC<LocalParkData> = ({ name, parkCode, image, state }) => {
  
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
    </section>
  )
}

export default SavedCard