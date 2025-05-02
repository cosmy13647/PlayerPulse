import React from 'react'
import { useState } from 'react'
import { Menu } from './Menu'
import styles from './Navbar.module.css'
import {getImageUrl} from "../../utils";

export const Navbar = () => {

 
  return (
    <div>
<nav className={styles.navbar}>
  <div className={styles.logo}><img className={styles.logoimg} src={getImageUrl('logo.png')} alt="" /></div>
{ /* <button className={styles.searchbtn} > <img className={styles.searchbtnimg} src={getImageUrl('scan.png')} alt="" /></button>*/}
 <Menu/>
  </nav>

    </div>
  )
}
