import { CurrentParkContainer } from '../interfaces'
import './Location.scss'

const Location: React.FC<CurrentParkContainer> = props => {
  const { currentPark } = props as CurrentParkContainer 
  console.log(currentPark)
  console.log('helllo')
    return (
      <section>
        <p><b>Driving directions to {currentPark.name}: </b>{currentPark.directions}</p>
        <iframe 
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d196281.64169563106!2d${currentPark.longitude}!3d${currentPark.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1610139788967!5m2!1sen!2sus`} 
            width = "600" height = "450">
        </iframe >
      </section>
      
    )
}

export default Location
