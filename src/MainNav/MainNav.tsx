import './MainNav.scss';
import NavSearch from '../NavSearch/NavSearch'
import ParkList from '../ParkList/ParkList'
import parkfinderLogo from './landscape.png'
import { nationalParks } from '../ParkData'
import ParkBtn from '../ParkBtn/ParkBtn'
import { LocalParkData } from '../interfaces'


interface ChoosePark {
  choosePark: (parkCode: string) => void
}

type NavProps = ChoosePark | LocalParkData

const MainNav: React.FC<NavProps> = (props) => {
    const { choosePark } = props as ChoosePark

    const parksOnDisplay = nationalParks.map(park => {
    return <ParkBtn
      key={park.parkCode}
      name={park.name}
      parkCode={park.parkCode}
      choosePark={choosePark}
    />
  })

    return (
        <nav className="main-nav">
            <img 
                className="logo"
                src={parkfinderLogo}
                alt="National Parkfinder Logo"
            />
            <h1>National Parkfinder</h1>
            <NavSearch />
            <ParkList 
                choosePark={choosePark}
                parksOnDisplay={parksOnDisplay} 
            />
            <div className="main-nav-saved-btn-container">
                <button className="main-nav-saved-btn">Visited</button>
                <button className="main-nav-saved-btn">Bucket List</button>
            </div>
        </nav>
    )
}

export default MainNav