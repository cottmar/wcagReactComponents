import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';


const navigationItems = props => (
  <ul className={styles.NavigationItems}>
   <NavigationItem link="/Home">Home</NavigationItem>
   <NavigationItem link="/ContactForm">Contact Form</NavigationItem>
   <NavigationItem link="/ToDoList">To Do List</NavigationItem>
  </ul>
);

export default navigationItems;