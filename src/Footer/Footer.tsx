import { Link } from 'react-router-dom'
import './Footer.scss'

// pass in buttons as props to generate links for footer

const Footer: React.FC = () => {
  return (
    <footer className="footer-btn-container">
      <Link
        to='/user/visited'>
        <button className="footer-btn"
        data-testid="footer-visited-btn">Visited</button>
      </Link>
      <Link
        to="/user/bucket-list">
        <button 
          className="footer-btn"
          data-testid="footer-bucket-btn">Bucket List</button>
      </Link>
    </footer>
  )
}

export default Footer