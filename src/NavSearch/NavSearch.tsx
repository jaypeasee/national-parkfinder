import React from 'react'
import './NavSearch.scss'

function NavSearch() {
    return(
        <form>
            <input
                placeholder="search by name"
            />
            <input 
                placeholder="state"
            />
        </form>
    )
}

export default NavSearch