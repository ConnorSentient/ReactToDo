import React, { Component } from 'react';
import './App.css';
import Tasks from './Tasks.js'
import List from  './List.js'
// import { throwStatement } from '@babel/types';

class App extends Component {
  state = {
    tasks: [],
    currentTask: {
      text: '',
      key: ''
    }
  }

  input = e => {
    let taskText = e.target.value;
    let currentTask = {text: taskText, key: Date.now()};
    this.setState({currentTask});
  }
  
  add = e => {
    e.preventDefault();
    let newTask = this.state.currentTask;
    if(newTask.text !== '') {
      let tasks = [...this.state.tasks, newTask];
      this.setState({tasks: tasks, currentTask: {text: '', key: ''}})
    }
  }

  del = key => {
    const filtered = this.state.tasks.filter(item => {
      return item.key !== key;
    })
    this.setState({tasks: filtered})
  }

  inputElement = React.createRef()

  render() {
    return (
      <div class="App">
        <h1>Super Simple ToDo</h1>
        <h4><sub>Its about as basic as it comes</sub></h4>
        <List add={this.add} inputElement={this.inputElement} input={this.input} current={this.state.currentTask} />
        <Tasks items={this.state.tasks} del={this.del} />
      </div>
    )
  }
}

export default App;
