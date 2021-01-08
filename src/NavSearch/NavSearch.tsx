import React, { useState, FormEvent } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import './NavSearch.scss'

interface FilterButtonsByName {
    filterButtonsByName: (searchTerm: string) => void
}

const NavSearch: React.FC = (props) => {
    const [nameSearch, setNameSearch] = useState<string>('')

    const handleSearchChange = (event: any) => {
        setNameSearch(event.target.value)
        console.log(event.target.value)
        // props.filterButtonsByName(event.currentTarget.value)
    }

    return(
        <form
            className='nav-search'
        >
            <input
                placeholder='search by name'
                value={nameSearch}
                onChange={handleSearchChange}
                name="name"
            />
        </form>
    )
}

export default NavSearch