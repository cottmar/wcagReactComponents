import React from 'react';
import styles from './DrawerToggle.module.css';

const drawerToggle = props => (
  <div onClick={props.clicked} className={styles.DrawerToggle}>Menu</div>
)

export default drawerToggle;