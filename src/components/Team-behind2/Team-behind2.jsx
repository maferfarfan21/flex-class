import React from "react";
import styles from './Team-behind2.module.css'



const Teambehind2 = () => {
  return (
   <div className={styles.team}>  

     <div className={styles.text}>
        <div className={styles.round}>
          <div className={styles.contain}>
            <div className={styles.round2}></div>
            <div className={styles.round2}></div>
          </div>
          <div className={styles.contain}>
            <div className={styles.round2}></div>
            <div className={styles.round2}></div>
          </div>
          
            
        </div>
        <div className={styles['content']}>
            <h2>The team behind</h2>
            <p>Lorem ipsum mas cosas y texto que convenza
            a unirse a tu secta satánica.</p>
            <button> Join</button>
        </div>
        
        <div>

        </div>

     </div>
    
    </div>
     
  );
};

export default Teambehind2;