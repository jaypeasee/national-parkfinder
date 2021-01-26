import { useState, useEffect } from 'react'
import './MainNav.scss';
import NavSearch from '../NavSearch/NavSearch'
import ParkList from '../ParkList/ParkList'
import parkfinderLogo from './landscape.png'
import { nationalParks } from '../ParkData'
import ParkBtn from '../ParkBtn/ParkBtn'
import { LocalParkData } from '../interfaces'
import StateDropdown from '../StateDropdown/StateDropdown';

// interface ChoosePark {
//   choosePark: (parkCode: string) => void
// }

interface FilterButtonsByName {
  filterButtonsByName: (searchTerm: string) => void
}

interface GenerateRandomParkCode {
  generateRandomParkCode: () => void
}

type NavProps = LocalParkData | FilterButtonsByName | GenerateRandomParkCode | {filterButtons: () => void}

const MainNav: React.FC<NavProps> = (props) => {
  const { generateRandomParkCode } = props as GenerateRandomParkCode
  const [nameSearch, setNameSearch] = useState<string>('')
  const [stateSelection, setStateSelection] = useState<string>('')
  const [parksOnDisplay, setParksOnDisplay] = useState<Array<JSX.Element>>([])

  useEffect(() => {
    filterButtons(nameSearch, stateSelection)
  }, [nameSearch, stateSelection])

  const createNavBtns = (parks: Array<LocalParkData>): void => {
    const parkButtons = parks.map(park => {
      return <ParkBtn
        key={park.parkCode}
        name={park.name}
        image={park.image}
        state={park.state}
        parkCode={park.parkCode}
      />
    })
    setParksOnDisplay(parkButtons)
  }

  const setSearch = (searchTerm: string) => {
    setNameSearch(searchTerm)
  }

   const setStateSelect = (stateSelection: string) => {
    setStateSelection(stateSelection)
  }

  const filterButtons = (searchTerm: string, stateSelection: string) => {
    setNameSearch(searchTerm)
    setStateSelection(stateSelection)
    const filteredParks = nationalParks.filter(park => {
      return park.name.toLowerCase().includes(searchTerm.toLowerCase()) && park.state.includes(stateSelection)
    })

    if (filteredParks.length > 0) {
      createNavBtns(filteredParks)
    } else {
      createNavBtns(nationalParks)
    }
  }

  return (
    <nav className='main-nav'>
      <img
        className='logo'
        src={parkfinderLogo}
        alt='National Parkfinder Logo'
      />
      <h1 className='site-header'>National Parkfinder</h1>
      <NavSearch setSearch={setSearch}/>
      <StateDropdown setStateSelect={setStateSelect}/>
      <ParkList
        generateRandomParkCode={generateRandomParkCode}
        parksOnDisplay={parksOnDisplay}
      />
    </nav>
  )
}

export default MainNav