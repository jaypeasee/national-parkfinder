import './MainNav.scss';
import NavSearch from '../NavSearch/NavSearch'
import ParkList from '../ParkList/ParkList'
import parkfinderLogo from './landscape.png'

function MainNav() {
    return (
        <nav>
            <img 
                className="logo"
                src={parkfinderLogo}
                alt="National Parkfinder Logo"
            />
            <h1>National Parkfinder</h1>
            <NavSearch />
            <ParkList />
            <div className="main-nav-saved-btn-container">
                <button className="main-nav-saved-btn">Visited</button>
                <button className="main-nav-saved-btn">Bucket List</button>
            </div>
        </nav>
    )
}

export default MainNav