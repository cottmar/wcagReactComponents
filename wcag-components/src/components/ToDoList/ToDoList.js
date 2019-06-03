import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import ToggleButton from '../UI/ToggleButton/ToggleButton';
import styles from './ToDoList.module.css';

class ToDoList extends Component {
  constructor(props){
    super(props);

    this.state = {
      newItem: '',
      list: []
    }
  }

  updateInput = (key, value) => {
    this.setState({
      [key]: value
    });
  }

  addItem = () => {
    const newItem = {
      id: Math.random(),
      value: this.state.newItem.slice()
    }
    const list = [...this.state.list];
      list.push(newItem);

    this.setState({
      list,
      newItem: ''
    })
  }

  removeItem = (id) => {
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({
      list: updatedList
    })
  }

    render() {
      return (
        <Aux>
            <h1 tabIndex="-1">My Accessible To Do List</h1>
            <form>
            <label>To Do Item:</label>
              <input
                type="text"
                placeholder="Ex: Pet a chicken"
                className={styles.Input}
                aria-required="true"
                aria-label="Write a new to-do item"
                value={this.state.newItem}
                onChange={event => this.updateInput("newItem", event.target.value)}  
              />
          <ToggleButton 
            onClick={() => this.addItem()}
          >
            Add
          </ToggleButton>
          </form>
          <div className={styles.List}>
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <ToggleButton
                      onClick={() => this.removeItem(item.id)}
                    >
                      X
                    </ToggleButton>
                  </li>
                )
              })}
            </ul>
          </div>
        </Aux>
      )
    }
  }

export default ToDoList;

