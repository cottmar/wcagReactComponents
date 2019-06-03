import React from 'react';
import styles from './Toolbar.module.css';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = props => (
  <header className={styles.Toolbar}>
   <DrawerToggle clicked={props.drawerToggleClicked}/>
    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar;