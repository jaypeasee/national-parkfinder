import { LocalParkData } from '../interfaces'

const SavedCard: React.FC<LocalParkData> = ({ name, parkCode, image, state }) => {
  // const { name } = props
  // const { parkCode } = props
  // const { image } = props
  // const { key } = props as LocalParkData
  
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default SavedCard