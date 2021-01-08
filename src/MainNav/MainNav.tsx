import { useState, useEffect } from 'react'
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

interface FilterButtonsByName {
    filterButtonsByName: (searchTerm: string) => any
}

type NavProps = ChoosePark | LocalParkData | FilterButtonsByName

const MainNav: React.FC<NavProps> = (props) => {
    const { choosePark } = props as ChoosePark
    const [nameSearch, setNameSearch] = useState<string>('')
    const [parksOnDisplay, setParksOnDisplay] = useState<Array<LocalParkData>>()

    useEffect(() => {
        const parkButtons: any = nationalParks.map(park => {
            return <ParkBtn
                key={park.parkCode}
                name={park.name}
                parkCode={park.parkCode}
                choosePark={choosePark}
            />
        })
        setParksOnDisplay(parkButtons)
    }, [nameSearch])

    const filterButtonsByName = (searchTerm: string): FilterButtonsByName => {
        if (parksOnDisplay) {
            setNameSearch(searchTerm)
            const filteredParks = parksOnDisplay.filter(park => {
            return park.name.includes(searchTerm)
        })
            setParksOnDisplay(filteredParks)
        }
    }

    return (
        <nav className="main-nav">
            <img 
                className="logo"
                src={parkfinderLogo}
                alt="National Parkfinder Logo"
            />
            <h1>National Parkfinder</h1>
            <NavSearch 
                filterButtonsByName={filterButtonsByName}
            />
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