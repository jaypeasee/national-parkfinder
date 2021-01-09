import './BannerIcons.scss'
import { LocalParkContainer, LocalParkData, CurrentParkContainer } from '../interfaces'
import bucketBlack from './icons/bucket-black.png'
import bucketGreen from './icons/bucket-green.png'
import checkBlack from './icons/check-black.png'
import checkGreen from './icons/check-green.png'

interface AddToVisited {
  addToVisited: (addedPark: LocalParkData) =>  void
}

type BannerIconsProps = AddToVisited | LocalParkContainer | LocalParkData | CurrentParkContainer


const BannerIcons: React.FC<BannerIconsProps> = props => {
  const { addToVisited } = props as AddToVisited
  const { currentPark } = props as CurrentParkContainer
  const { parkCode } = currentPark as any
  
    return (
        <section className="banner-icons">
            <div  role="button" 
              onClick={() => addToVisited(parkCode)} 
              className="banner-btn-container">
              <img 
                  src={checkBlack}
                  alt="not checked"
                  className="saved-icon"
              />
              <h2>Add To Visited</h2>
            </div>
            <div className="banner-btn-container">
                <img
                    src={bucketBlack}
                    alt="not added to bucket list"
                    className="saved-icon"
                />
                <h2>Add To Bucket List</h2>
            </div>
        </section>
    )
}

export default BannerIcons