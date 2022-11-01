import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className='header'>
        <img src={Logo} alt="" className='logo'/>
        <ul className='header-menu'>
            <li>Inicio</li>
            <li>Programas</li>
            <li>Porque Nosotros</li>
            <li>Planes</li>
            <li>Testimonios</li>
        </ul>
    </div>
  )
}

export default Header