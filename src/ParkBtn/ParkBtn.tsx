import './ParkBtn.scss'

interface Park { 
  name: string
  parkCode: string
  image: string
  state: string
}

function ParkBtn(natPark: Park) {
    return (
        <button>{natPark.name}</button>
    )
}

export default ParkBtn