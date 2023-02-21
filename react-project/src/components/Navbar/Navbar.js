import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Sunstick from "../../Pages/Sunstick/Sunstick";
import NotFound from "../../Pages/NotFound/NotFound";
import { Link, Route, Routes} from 'react-router-dom';
import { useState } from "react";
import {HiOutlineShoppingBag, HiChevronDown, HiLogin, HiOutlineSearch} from 'react-icons/hi';
import './Navbar.css';
import boj from "./boj.png";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

    return (
        <div>
            <nav className="nav">
            <ul className="navbar">
                <li className="nav-link0">
                    <Link to="/all">ALL</Link>
                </li>
                <div>
                <button className="nav-link1" onClick={handleOpen}>SKIN CARE <HiChevronDown/> </button>
                {open ? (
                    <div className="dropdown">
                    <ul className="menu">
                        <li className="menu-item1">
                            <h2>ALL SKIN CARE</h2>
                        </li>
                        <li className="menu-item">
                            <button>CLEANSER</button>
                        </li>
                        <li className="menu-item">
                            <button>EXFOLIATOR</button>
                        </li>
                        <li className="menu-item">
                            <button>TONER & ESSENCE</button>
                        </li>
                        <li className="menu-item">
                            <button>SERUM</button>
                        </li>
                        <li className="menu-item">
                            <button>MOISTURIZER</button>
                        </li>
                        <li className="menu-item">
                            <button>SUNSCREEN</button>
                        </li>
                        <li className="menu-item">
                            <button>MASK</button>
                        </li>
                    </ul>
                    <ul className="menu2">
                        <li className="menu-item1">
                            <h2>KEY INGREDIENTS</h2>
                        </li>
                        <li className="menu-item">
                            <button>GINSENG</button>
                        </li>
                        <li className="menu-item">
                            <button>RICE</button>
                        </li>
                        <li className="menu-item">
                            <button>GREEN PLUM & PLUM FLOWER</button>
                        </li>
                        <li className="menu-item">
                            <button>PROPOLIS</button>
                        </li>
                        <li className="menu-item">
                            <button>GREEN TEA</button>
                        </li>
                        <li className="menu-item">
                            <button>CENTELLA ASIATICA</button>
                        </li>
                        <li className="menu-item">
                            <button>RED BEAN</button>
                        </li>
                        <li className="menu-item">
                            <button>MUGWORT</button>
                        </li>
                    </ul>
                    <ul className="menu3">
                        <li className="menu-item1">
                            <h2>CONCERN</h2>
                        </li>
                        <li className="menu-item">
                            <button>WRINKLES</button>
                        </li>
                        <li className="menu-item">
                            <button>ACNE & BREAKOUTS</button>
                        </li>
                        <li className="menu-item">
                            <button>PORES & SEBUM</button>
                        </li>
                        <li className="menu-item">
                            <button>DULLNESS & UNEVEN TONE</button>
                        </li>
                        <li className="menu-item">
                            <button>SENSITIVITY & BLEMISH</button>
                        </li>
                        <li className="menu-item">
                            <button>DRYNESS</button>
                        </li>
                    </ul>
                    </div>) : null}
                </div>
                <li className="nav-link">
                    <Link to="/lifestyle" className="element">LIFESTYLE</Link>
                </li>
                <li className="nav-link">
                    <Link to="/sets" className="element2">SETS</Link>
                </li>
                <li className="nav-link">
                    <Link to="/">
                        <img src={boj} alt="logo" className="logo"/>
                    </Link>
                </li>
                <li className="login">
                    <Link to="/login" className="login"><HiLogin/></Link>
                </li>
                <a className="search"> <HiOutlineSearch/></a>
                <li className="shop"> 
                    <Link to="/cart"><HiOutlineShoppingBag/></Link>
                </li>
            </ul>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/the-beauty-of-joseon-glow-sun-set' element={<Sunstick/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
            </nav>
        </div>
    )
}

export default Navbar;