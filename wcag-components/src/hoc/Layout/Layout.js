import React, { Component } from 'react';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import Aux from '../Aux/Aux';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;