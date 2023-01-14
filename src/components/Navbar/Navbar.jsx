import React from "react";
import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.nav}>
        <NavLink to='/'>Inicio</NavLink>
        <NavLink to='/Team'>Team</NavLink>
        <NavLink to='/Company'>Company</NavLink>
        <NavLink to='/Contact'>The Contact</NavLink>
      </div>

    </div>
     
  );
};

export default Navbar;