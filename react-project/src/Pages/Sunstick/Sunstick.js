import { useState } from "react";
import './Sunstick.css';
import {HiArrowNarrowLeft, HiArrowNarrowRight} from 'react-icons/hi';

const images = [
    "https://cdn.shopify.com/s/files/1/0558/4135/7989/products/12055274_1000x.jpg?v=1673580553",
    "https://cdn.shopify.com/s/files/1/0558/4135/7989/products/0O8A9081_1000x.jpg?v=1673345028",
    "https://cdn.shopify.com/s/files/1/0558/4135/7989/products/8_ab0be376-2154-4198-9898-e1bb6339c8ee_1000x.jpg?v=1653271813",
    "https://cdn.shopify.com/s/files/1/0558/4135/7989/products/0O8A2645_1000x.jpg?v=1673580539"
];

const Sunstick = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [count, setCount] = useState(1);
    const [show, setShow] = useState(false);

    const handleOpen = () => {
        setShow(!show);
      };    

    const previousSlide = () => {
        setCurrentImage(currentImage === 0 ? images.length-1 : currentImage - 1);
    }

    const nextSlide = () => {
        setCurrentImage(currentImage === images.length-1 ? 0 : currentImage + 1);
    }
    
    const increment = () => {
        setCount(function (prevCount) {
            if (prevCount < 10) {
                return (prevCount += 1);
            }
            else {
                return (prevCount = 10);
            }
        });
    }

    const decrement = () => {
        setCount(function (prevCount) {
            if (prevCount > 0) {
                return (prevCount -= 1); 
            } else {
                return (prevCount = 0);
            }
        });
    }

    const handleCart = () => {
        if (count === 0)
            alert('Select at least one item!');
        else 
            alert('Added to cart');
    };

    return (
        <>
        <div>
            <div className="slider">
                <div className="leftArrow" onClick={previousSlide}>
                    <HiArrowNarrowLeft />
                </div>
                <div className="rightArrow" onClick={nextSlide}>
                    <HiArrowNarrowRight />
                </div>
                {images.map((image, index) =>
                    currentImage === index && (
                    <div key={image} className="slide">
                        <img src={image} alt="images" />
                    </div>
                )
            )}
            </div>
        </div>
        <h2 className="titleSunstick">THE BEAUTY OF JOSEON<br/> GLOW + SUN SET</h2>
        <p className="priceSunstick">BOX SIZE 210*130*40 (MM) / 　$28.00</p>
        <p class="quantity">Quantity:</p>
            <div class="cartIncrease">
                <input type="button" onClick={decrement} value="-" class="minus"/>
                <p type="text" maxlength="2" max="10" size="1" id="number" class="quantityNum"> {count} </p>
                <input type="button" onClick={increment} value="+" class="plus"/>
            </div>
        <div className="shopButton">
            <button className="addToCart" onClick={handleCart}>ADD TO CART</button><br/>
            <button className="buyItNow">BUY IT NOW</button>
        </div>
        <div className="aboutTheSet">
            <p className="titleSet">About the set</p>
            <p className="titleDesc">The Glow Deep serum features alpha arbutin and niacinamide to help target the 
                appearance of pigmentation. It also gives you hydration and antioxidant benefits. Then you have the sun stick which is 
                portable, convenient, and most of all, as shine-free as possible. You can use 
                it to apply in the morning and reapply throughout the day easily. The two combined 
                give you a streamlined and efficient morning routine to prevent and protect and keep your skin glowing 
                throughout the day.</p>
        </div>
        <div className="accordion" onClick={handleOpen}>
          <div className="fullIngredients">FAQ</div>
        <div className="sign">{show ? '-' : '+'}</div>
        {show && (
          <div className="accordionBody">
            Matte Sun Stick <br/><br/>
            Q/ Is it chemical or physical sunscreen? <br/>
            A/ It is chemical sunscreen.<br/><br/>

            Q/ How often should I reapply?<br/>
            A/ It is recommended to reapply every 2-3 hours.<br/><br/>

            Q/ What skin types is it recommended for?<br/>
            A/ It can be used for all skin types. With a matte texture and no greasiness, it is especially recommended for oily skin with active sebum secretion.<br/><br/>

            Glow Deep Serum<br/>
            Q : What skin types can use it?<br/>
            A : Suitable for all skin types. In particular, it is designed for concerns about dull skin tone and pigmentation.<br/><br/>

            Q : Can I use it both day and night?<br/>
            A : Yes, you can. However, alpha arbutin is vulnerable to light and heat, so it is recommended for use in the evening.<br/><br/>

            Q : Do I need to keep it refrigerated?<br/>
            A : Avoid direct sunlight and store it in a cool, dark place.<br/>
            Alpha-arbutin is vulnerable to light and heat, so please use it as soon as possible after opening.<br/><br/>
          </div>
        )}
        </div>
        </>
    )
}

export default Sunstick;