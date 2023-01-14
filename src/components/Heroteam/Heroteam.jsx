import React from "react";
import styles from './Heroteam.module.css'
import logo from '../images/logo.png';


const Heroteam = () => {
  return (
   <div className={styles['hero']}>  
     <img  src={logo} alt="Logo" />;
    
    </div>
     
  );
};

export default Heroteam;