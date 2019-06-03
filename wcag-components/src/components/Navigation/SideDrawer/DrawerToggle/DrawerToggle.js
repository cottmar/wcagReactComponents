import React from 'react';
import styles from './DrawerToggle.module.css';

const drawerToggle = props => (
  <button 
    onClick={props.clicked}
    className={styles.DrawerToggle}
    tabIndex="0"
  >
   Menu
  </button>
)

export default drawerToggle;