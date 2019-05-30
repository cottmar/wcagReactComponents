import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';


const navigationItems = props => (
  <ul className={styles.NavigationItems}>
   <NavigationItem link="/1">Page One</NavigationItem>
   <NavigationItem link="/2">Page Two</NavigationItem>
   <NavigationItem link="/ToggleButton">Toggle Button</NavigationItem>
   <NavigationItem link="/ContactForm">Contact Form</NavigationItem>
  </ul>
);

export default navigationItems;