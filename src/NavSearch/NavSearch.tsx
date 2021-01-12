import React, { useState } from 'react'
import './NavSearch.scss'

type NavSearchProps = { setSearch: (searchTerm: string) => void }

const NavSearch: React.FC<NavSearchProps> = props => {
  const [nameSearch, setNameSearch] = useState<string>('')
  const { setSearch } = props as NavSearchProps

  const handleSearchChange = (event: any) => {
    setNameSearch(event.target.value)
    setSearch(event.target.value)
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