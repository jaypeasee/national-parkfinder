import React, { useState, FormEvent } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import './NavSearch.scss'

const NavSearch: React.FC = () => {
    const [nameSearch, setNameSearch] = useState<string>('')

    

    return(
        <form
            className='nav-search'
        >
            <input
                placeholder='search by name'
                value={nameSearch}
                onChange={event => setNameSearch(event.target.value)}
                name="name"
            />
        </form>
    )
}

export default NavSearch