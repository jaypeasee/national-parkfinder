import './ParkBtn.scss'

interface Park { 
  name: string
  parkCode: string
  image: string
  state: string
}

interface ChoosePark {
  choosePark: (parkCode: string) => void;
}

type ParkBtnProps = Park | ChoosePark

const ParkBtn: React.FC<ParkBtnProps> = props => {
  const { name } = props as Park
  const { state } = props as Park
  const { parkCode } = props as Park
  const { image } = props as Park
  const { choosePark } = props as ChoosePark
    return (
        <button className="park-button" onClick={() => choosePark(parkCode)}>{name}</button>
    )
}

export default ParkBtn