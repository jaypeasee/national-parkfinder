import './ParkContainer.scss'
import Banner from '../Banner/Banner'
import UserNav from '../UserNav/UserNav'
import ParkInfo from '../ParkInfo/ParkInfo'

function ParkContainer() {
    return (
        <section>
            <Banner />
            <UserNav />
            <ParkInfo />
        </section>
        
    )
}

export default ParkContainer;