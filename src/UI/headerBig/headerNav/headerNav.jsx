import React from 'react';
import styles from './headerNav.module.scss'
import HeaderNavLink from './headerNavLink'
import data from '../../../data/data'
import {FaBars, FaTimes} from 'react-icons/fa';
import {useRef} from 'react'
let navLink = data.headerLinks.map(link => <HeaderNavLink headerLinkName={link.linkName} id={link.id}/>)

const HeaderNav = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle(styles.responsiveNav)
  }
  return (
    <div className={styles.headerNav}>
        <nav ref={navRef} className={styles.headerList}>
            {navLink}
            <button className={styles.navCloseBtn} onClick={showNavBar}>
              <FaTimes />
            </button>
        </nav>
        <button className={styles.navBtn} onClick={showNavBar}>
          <FaBars />
        </button>
    </div>
  )
}

export default HeaderNav