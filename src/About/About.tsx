import { CurrentParkContainer } from '../interfaces'
import './About.scss'

const About: React.FC<CurrentParkContainer> = props => {
  const { currentPark } = props as CurrentParkContainer
  const { activities } = currentPark as any

  const parkActivities = activities.map((activity: any) => {
    return <li>{activity.name}</li>
  })

  return (
    <section className='about'>
      <p><b>About {currentPark.name}: </b>{currentPark.description}</p>
      <p><b>Weather Info: </b>{currentPark.weatherInfo}</p>
      <h3 style={{textAlign: 'center'}}><b>Activities:</b></h3>
      <ul>
        {parkActivities}
      </ul>
    </section>
  )
}

export default About