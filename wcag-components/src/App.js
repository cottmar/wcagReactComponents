import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.module.css';

import Layout from '../src/hoc/Layout/Layout';
import ToggleButton from './components/UI/ToggleButton/ToggleButton';
import ContactForm from './containers/ContactForm/ContactForm';
import One from '../src/components/One/One';
import Two from '../src/components/Two/Two';

class App extends Component {
  componentDidMount() {
    document.title = 'Web Accessible React Components';
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/1" component={One} />
        <Route path="/2" component={Two} />
        <Route path="/ToggleButton" component={ToggleButton} />
        <Route path="/ContactForm" component={ContactForm} />
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
