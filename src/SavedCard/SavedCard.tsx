import { LocalParkData } from '../interfaces'

const SavedCard: React.FC<LocalParkData> = (props) => {
  const { name } = props as LocalParkData
  const { image } = props as LocalParkData
  // const { key } = props as LocalParkData

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
  
}

export default SavedCard