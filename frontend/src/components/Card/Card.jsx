import React from 'react'
import styles from './Card.module.css'
import { getImageUrl } from '../../utils';
export const Card = ({ userImg = 'boy.png', userName = 'unknown', userAvg = 0 }) => {
  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.user}>
        <div className={styles.userimg}>
          <img src={userImg} alt={userName} className={styles.userImg} />
        </div>
        <div className={styles.userdetails}>
        <div className={styles.username}> <h1>{userName}</h1></div>
   <div className={styles.useravg}> 
   <span>⭐</span>
   <span>{userAvg}</span>
   </div>
</div>
        
      </div>
      <div className = {styles.btncontainer}>
      <button className={styles.profile}>view profile</button>
      <button className={styles.rating}>rate player</button>
      </div>
    </div>
    </div>
  );
};