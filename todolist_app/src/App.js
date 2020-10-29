import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Feed the dog',
        completed: false
      },
      {
        id: 3,
        title: 'Make the laundry',
        completed: false
      },
    ]
  }

  //Toggle Complete
  markComplete = (id) => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  markDelete = (id) => {
    console.log(id);
    //  ...  spread operator 
    this.setState({ 
      todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} markDelete={this.markDelete} />
      </div>
    );
  }
}

export default App;
