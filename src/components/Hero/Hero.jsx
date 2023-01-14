import React from "react";
import styles from './Hero.module.css'
import logo from '../images/logo.png';


const Hero = () => {
  return (
   <div className={styles['hero']}>  
     <img  src={logo} alt="Logo" />;
    
    </div>
     
  );
};

export default Hero;