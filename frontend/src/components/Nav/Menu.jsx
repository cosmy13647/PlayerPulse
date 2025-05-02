import React from 'react'
import { getImageUrl } from '../../utils'
import { useState } from 'react'
import styles from './Menu.module.css'
export const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
   const toggleMenu = () => {
    
     setMenuOpen(prev => !prev)
   };
  return (




    <div>
<button className={styles.menubtn} ><img className={styles.menubtnimg} onClick={toggleMenu} src={getImageUrl('menu-bar.png')} alt="" /></button>
{menuOpen ?  <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#Home">Home</a>
                </li>
                <li>
                    <a href="#Leaderboard">leaderboard</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>

            </ul> : ""}




         
    </div>
  )
}
