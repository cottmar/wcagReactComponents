import React from 'react';
import styles from './ToggleButton.module.css';



  const toggleButton = (props) => (
    <button
     className={styles.Button}
     onClick={props.clicked}
     tabIndex="0"
     aria-pressed="false"
     >
     Click!
     </button>
  )

  export default toggleButton;