import './ParkBtn.scss'
import { LocalParkData } from '../interfaces'
import { Link } from 'react-router-dom'


type ParkBtnProps = LocalParkData

const ParkBtn: React.FC<ParkBtnProps> = props => {
  const { name } = props as LocalParkData
  const { parkCode } = props as LocalParkData

  return (
    <Link
      data-testid={`${parkCode} button`}
      to={`/park/${parkCode}/about`}
      className="main-nav-link"
      >
      <button
        className="park-button"
      >{name}</button>
    </Link>
  )
}

export default ParkBtn