import React, { Component } from 'react';
import Button from './Button.js';
import styles from './App.module.css';

class App extends Component {
  componentDidMount() {
    document.title = 'Web Accessible React Components';
  }

  render() {
    return (
      <div className={styles.App}>
        <p>Hello?</p>
        <Button />
      </div>
    )
  }

}

export default App;
