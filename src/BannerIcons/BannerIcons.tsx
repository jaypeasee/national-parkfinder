import './BannerIcons.scss'
import { LocalParkContainer, LocalParkData } from '../interfaces'
import bucketBlack from './icons/bucket-black.png'
import bucketGreen from './icons/bucket-green.png'
import checkBlack from './icons/check-black.png'
import checkGreen from './icons/check-green.png'

interface AddToVisited {
  addToVisited: (addedPark: LocalParkData) =>  void
}

type BannerIconsProps = AddToVisited | LocalParkContainer


const BannerIcons: React.FC<BannerIconsProps> = props => {
  // const [addedToVisited, setAddedToVisited] = useState(false)
  const { addToVisited } = props as AddToVisited

    return (
        <section className="banner-icons">
            <div  role="button" onClick={() => addToVisited} className="banner-btn-container">
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