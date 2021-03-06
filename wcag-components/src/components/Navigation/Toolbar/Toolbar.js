import React from 'react';
import styles from './Toolbar.module.css';

import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = props => (
  <header className={styles.Toolbar}>
  <div>menu</div>
    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar;