import { Link } from 'react-router-dom';
import './style.css';
import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../../assests/logo.png'

const Navbar = () => {
  // hamburger clicked state
  const [clicked, setClicked] = useState<boolean>(false);

  // function to handle the hamburger click
  const handleClick = () => {
    setClicked(!clicked);
  }


  return (
    <div className='navBarItems'>
      <Link to="/"><img className='logo' src={Logo}/></Link>

      {/* Hamburger menu */}
      <div onClick={handleClick} className='hamburger'>
        {
          clicked? (<FaTimes size={30}/>) : (<FaBars size={30}/>)
        } 
      </div>

      <ul className={clicked? 'navBarMenu active' : 'navBarMenu'}>
        <li><Link className='navbarLink' to='/'>Home</Link></li>
        <li><Link className='navbarLink' to='/about'>About</Link></li>
        <li><Link className='navbarLink' to='/services'>Services</Link></li>
        <li><Link className='navbarLink' to='/properties'>Properties</Link></li>
        <li><Link className='navbarLink' to='/agents'>Agents</Link></li>
        <li><Link className='navbarLink' to='/contact'><button className='primaryBtn contactBtn'>Contact</button></Link></li>
      </ul>
    </div>
  )
}

export default Navbar