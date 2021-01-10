import './ParkBtn.scss'
import { LocalParkData } from '../interfaces'
import { Link } from 'react-router-dom'

interface ChoosePark {
  choosePark: (parkCode: string) => void;
}

type ParkBtnProps = LocalParkData | ChoosePark

const ParkBtn: React.FC<ParkBtnProps> = props => {
  const { name } = props as LocalParkData
  const { parkCode } = props as LocalParkData
  const { choosePark } = props as ChoosePark
  return (
    <Link
      to={`/${parkCode}/about`}>
      <button
        role="button"
        className="park-button"
        onClick={() => choosePark(parkCode)}
      >{name}</button>
    </Link>
  )
}

export default ParkBtn