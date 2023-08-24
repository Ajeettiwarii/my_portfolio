import React, { useState } from "react";
import { FaBars,FaReact } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import {HiX} from "react-icons/hi";  
import './styles.scss';
import Ajeet from '../../assets/ajeet.png'

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  }, 
  {   
    label:"PORTFOLIO",
    to:"/portfolio",
    
  },   
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            {/* <FaReact size={30} /> */}
            <img className="navbar__container__logo_img" src={Ajeet} alt="" />
            {/* Ajeet */}
          </Link>
        </div>
        <ul className = {`navbar__container__menu ${toggleIcon ? 'active' : ' '}`} > 
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
             {
                toggleIcon ? <HiX size={30}/>  : <FaBars size={30}/>
             }
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
