import { CurrentParkContainer } from '../interfaces'
import './About.scss'

const About: React.FC<CurrentParkContainer> = props => {
  const { currentPark } = props as CurrentParkContainer
  return (
    <section className="about">
      <p><b>About {currentPark.name}:</b>{currentPark.description}</p>
      <p><b>Weather Info:</b>{currentPark.weatherInfo}</p>
    </section>
  )
}

export default About