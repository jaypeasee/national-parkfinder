import './ParkBtn.scss'
import { LocalParkData } from '../interfaces'

interface ChoosePark {
  choosePark: (parkCode: string) => void;
}

type ParkBtnProps = LocalParkData | ChoosePark

const ParkBtn: React.FC<ParkBtnProps> = props => {
  const { name } = props as LocalParkData
  const { parkCode } = props as LocalParkData
  const { choosePark } = props as ChoosePark
    return (
      <button 
        className="park-button" 
        onClick={() => choosePark(parkCode)}
      >{name}</button>
    )
}

export default ParkBtn