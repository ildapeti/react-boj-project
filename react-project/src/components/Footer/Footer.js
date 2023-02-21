import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className='footer'>
                    <p className='boj'>
                    <Link to='/' className='logo'>Beauty of Joseon</Link> 
                    </p>       
                    <div className="second">
                    <p className="location">GOODAI GLOBAL INC.<br/>
                            JUHYCK CHEUN<br/><br/>
                            Suite<br/>#1406, 150, Yeongdeungpo-ro, Yeongdeungpo-gu,<br/>Seoul, 
                            Republic of Korea<br/><br/>
                            FLAGSHIP STORE<br/>82 Samcheong-ro, Seoul, Republic of Korea<br/><br/>
                            cs@beautyofjoseon.com</p>
                    </div>
                    <div className='links'>
                      <ul>
                          <li><a>Contact</a></li>
                          <li><a>Terms and Conditions</a></li>
                          <li><a>Shipping</a></li>
                          <li><a>Return & Refund</a></li>
                          <li><a>Payment</a></li>
                          <li><a>Privacy Policy</a></li>
                          <li><a>FAQ</a></li>
                          <li><a>Terms of Service</a></li>
                          <li><a>Refund Policy</a></li>
                      </ul>
                  </div>    
            </div>
        </>
    )
}

export default Footer;