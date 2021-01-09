import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer: React.FC = () => {
  return (
    <footer className="footer-btn-container">
      <Link
        to='/user/visited'>
        <button className="footer-btn">Visited</button>
      </Link>
      <Link
        to="/user/bucket-list">
        <button className="footer-btn">Bucket List</button>
      </Link>
    </footer>
  )
}

export default Footer