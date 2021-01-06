import React from 'react'
import './ParkBtn.scss'
import { JsxElement } from 'typescript'
import { type } from 'os'

interface Park { 
  name: string
  parkCode: string
  image: string
  state: string
}

type ParkBtn = {natPark: Park}

function ParkBtn(natPark: Park): JSX.Element {
  console.log(natPark)
    return (

        <button>{natPark.name}</button>
    )
}

export default ParkBtn