import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';

import Layout from '../src/hoc/Layout/Layout';
import Homepage from '../src/components/Homepage/Homepage';
import ContactForm from './containers/ContactForm/ContactForm';
import ToggleButton from './components/UI/ToggleButton/ToggleButton';
import ToDoList from '../src/components/ToDoList/ToDoList';

class App extends Component {
  componentDidMount() {
    document.title = 'Web Accessible React Components';
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/Home" component={Homepage} />
        <Route path="/ToggleButton" component={ToggleButton} />
        <Route path="/ContactForm" component={ContactForm} />
        <Route path="/ToDoList" component={ToDoList} />
      </Switch>
    );

    return (
      <div className={styles.App}>
        <Layout>
          {routes}
        </Layout>
      </div>
    )
  }
}

export default App;
