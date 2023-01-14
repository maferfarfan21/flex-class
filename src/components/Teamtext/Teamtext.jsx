import React from "react";
import styles from './Teamtext.module.css'



const Teamtext = () => {
  return (
   <div className={styles.team}>  

     <div className={styles.text}>
        <div className={styles['content']}>
            <h2>Truly teamplayers</h2>
            <p>We have the most team players individuals in this company trusts each other and some even can fly.</p>
            <button> Incredible CTA that I will click</button>
        </div>

        <div className={styles.round}>
          <div className={styles.contain}>
          </div>  
        </div>
        
        
        <div>

        </div>

     </div>
    
    </div>
     
  );
};

export default Teamtext;