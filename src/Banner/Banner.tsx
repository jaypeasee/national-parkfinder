import './Banner.scss'
import BannerIcons from '../BannerIcons/BannerIcons'

function Banner() {
    return(
        <section>
            <img 
                className="banner-img"
                src="https://ewscripps.brightspotcdn.com/dims4/default/5a64170/2147483647/strip/true/crop/3000x1688+0+172/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F0b%2F77%2F2d7dc37a4c59ba8a3f9e2709d4e9%2Fgrand-canyon-deaths-shutterstock-via-cnn-040519.JPG"
                alt="Grand Canyon National Park"
            />
            <h1>Grand Canyon National Park</h1>
            <BannerIcons />
        </section>
    )
}

export default Banner