import Video from "../../Components/Video/Video";
import sunstick from "./sunstick.webp";
import sunstick2 from "./sunstick2.webp";
import sunstick3 from "./sunstick3.webp";
import product1 from './product1.webp';
import product2 from './product2.webp';
import product3 from './product3.webp';
import product4 from './product4.webp';
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <Video />
        <div className="sunstickImg">
          <img src={sunstick} className="sunImg" alt="sunstick"/>
        </div>
        <div className="info">
            <p className="para">THE BEAUTY OF JOSEON<br/>GLOW + SUN SET</p>
            <button>
              <Link to='/the-beauty-of-joseon-glow-sun-set' className="discover">DISCOVER </Link>
            </button>
        </div>
        <div className="sunstickImg2">
          <img src={sunstick2} className="sunImg2" alt="sunstick"/>
          <img src={sunstick3} className="sunImg3" alt="sunstick"/>
        </div>
        <p className="suggestion">OUR SUGGESTIONS</p>
        <div className="product1">
          <img src={product1} className="first" alt="product"/>
          <div className="prodPrice1">
            <div className="name1">Perfect Hanbang Palette</div>
                <div className="price1"> $55.00</div>
            </div>
        </div>
        <div className="product2">
          <img src={product2} className="first2" alt="product"/>
          <div className="prodPrice2">
            <div className="name2">Red Bean Refreshing Pore Mask</div>
                <div className="price2"> $20.00</div>
            </div>
        </div>
        <div className="product3">
          <img src={product3} className="first3" alt="product"/>
          <div className="prodPrice3">
            <div className="name3">Red Bean Water Gel</div>
                <div className="price3"> $18.00</div>
            </div>
        </div>
        <div className="product4">
          <img src={product4} className="first4" alt="product"/>
          <div className="prodPrice4">
            <div className="name4">Green Plum Refreshing Toner: AHA + BHA</div>
                <div className="price4"> $18.00</div>
            </div>
        </div>
        <div className="template">
          <span className="text">WE SINCERELY HOPE WE CAN RELIEVE YOUR TENSIONS AND STRESSES, AND GIVE YOU A HEALTHIER AND MORE PEACEFUL LIFE.</span>
        </div>
        </>
    )
}

export default Home;