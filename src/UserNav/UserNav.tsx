import { Link } from 'react-router-dom'
import { CurrentParkContainer } from '../interfaces'
import './UserNav.scss'

const UserNav: React.FC<CurrentParkContainer> = props => {
  const { currentPark } = props as CurrentParkContainer
  return (
    <nav className="user-nav">
      <Link to={`/${currentPark.parkCode}/about`}>
        <h2>About</h2>
      </Link>
      <Link to={`/${currentPark.parkCode}/location`}>
        <h2>Location</h2>
      </Link>
      <Link to={`/${currentPark.parkCode}/contact`}>
        <h2>Contact</h2>
      </Link>
    </nav>
  )
}

export default UserNav