import React from "react";
import styles from './Card.module.css'
import star from '../images/star.svg'



const Card = () => {
  return (
  <div className={styles.Cards}>
     <div className={styles['team']}>  
     <div className={styles.card}>
        <div className={styles.img}>
          <div className={styles.tag}>Boiler</div>

        </div>
        <h1>Featured event long name</h1>
        <p>Short description where people will get hyped af.</p>
        <div className={styles.tag2}>
          <button  className={styles.but}>I’ll go</button>
          <button>Save</button>
        </div>
      
     </div>
     <div className={styles.card}>
        <div className={styles.img2}>
          <div className={styles.tag3}><img src={star} alt="" /></div>

        </div>
        <h1>Featured event long name</h1>
        <p>Short description where people will get hyped af.</p>
        <div className={styles.tag2}>
          <button className={styles.but}>I’ll go</button> 
          <button>Save</button>
        </div>
      
     </div>
     <div className={styles.card}>
        <div className={styles.img}>
          

        </div>
        <h1>Featured event long name</h1>
        <p>Short description where people will get hyped af.</p>
        <div className={styles.tag2}>
          <button  className={styles.but}>I’ll go</button>
          <button>Save</button>
        </div>
      
     </div>
     <div className={styles.card}>
        <div className={styles.img}>
          

        </div>
        <h1>Featured event long name</h1>
        <p>Short description where people will get hyped af.</p>
        <div className={styles.tag2}>
          <button  className={styles.but}>I’ll go</button>
          <button>Save</button>
        </div>
      
     </div>

     
     
    
    </div>
  </div>
  
     
  );
};

export default Card;