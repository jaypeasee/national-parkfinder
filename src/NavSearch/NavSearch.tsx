import React, { useState } from 'react'
import './NavSearch.scss'

interface FilterButtonsByName {
  filterButtonsByName: (searchTerm: string) => void
}

const NavSearch: React.FC<FilterButtonsByName> = (props) => {
  const [nameSearch, setNameSearch] = useState<string>('')

  const handleSearchChange = (event: any) => {
    setNameSearch(event.target.value)
    props.filterButtonsByName(event.currentTarget.value)
  }

  return (
    <form className='nav-search'>
      <input
        className='search-bar'
        placeholder='search by name'
        value={nameSearch}
        onChange={handleSearchChange}
        name="name"
      />
    </form>
  )
}

export default NavSearch