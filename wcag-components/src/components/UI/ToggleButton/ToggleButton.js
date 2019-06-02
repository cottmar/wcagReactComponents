import React from 'react';
import styles from './ToggleButton.module.css';



  const toggleButton = (props) => (
    <button
     className={styles.Button}
     onClick={props.onClick}
     tabIndex="0"
     aria-pressed="false"
     role="switch"
     >
     {props.children}
     </button>
  )

  export default toggleButton;