import React from 'react';
import styles from './Form.module.css';

const Form = () => {
  return (
    <div className={styles.Form}>
      
      <div className={styles.contain}>

        <div className={styles.Form2}>
          <div className={styles.first}>
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Name' />
          <label htmlFor="">Surname</label>
          <input type="text" placeholder='Surname' />
          <label htmlFor="">Email</label>
          <input type="text" placeholder='Email' />
          </div>
          <div className={styles.first2}>
          
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Email' />
          </div>
        </div>
        <button>
          Submit
        </button>
        

      </div>
        
    </div>
  )
}

export default Form