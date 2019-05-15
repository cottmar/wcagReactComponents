import React, { Component } from 'react';
import ToggleButton from './UI/ToggleButton/ToggleButton';
import styles from './App.module.css';
import ContactForm from './containers/ContactForm/ContactForm';

class App extends Component {
  componentDidMount() {
    document.title = 'Web Accessible React Components';
  }

  render() {
    return (
      <div className={styles.App}>
      <p>Welcome!</p>
        <ToggleButton />
        <ContactForm />
      </div>
    )
  }

}

export default App;
