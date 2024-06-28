import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import logo from '../../images/1.svg'

const Nav = () => {
  return (
    <header>
    <nav className="navbar">
      <img src={logo} alt="logo" />
     <div className="wrapper">
     <NavLink exact to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/about" activeClassName="active">About</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      <NavLink to="/projects" activeClassName="active">My Projects</NavLink>
     </div>
        <button className="btn">Contact me</button>
    </nav>

    </header>
  );
};

export default Nav;
