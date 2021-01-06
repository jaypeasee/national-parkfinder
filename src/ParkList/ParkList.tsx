import React from 'react'
import { nationalParks } from '../ParkData'
import './ParkList.scss'
import ParkBtn from '../ParkBtn/ParkBtn'
import { JsxElement } from 'typescript'

// interface ParkList {
//   children: JSX.Element
// }

interface Park { 
  name: string
  parkCode: string
  image: string
  state: string
}

function ParkList(): JSX.Element {
  const parksOnDisplay = nationalParks.map(park => {
    console.log(park)
    return <ParkBtn
      name={park.name}
      parkCode={park.parkCode}
      image={park.image}
      state={park.state}
    />
  })
  return (
    <section>
      {parksOnDisplay}
    </section>
  )
}

export default ParkList