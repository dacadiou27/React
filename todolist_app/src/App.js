import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import About from './components/pages/About';

import './App.css';

//import uuid from 'uuid';
import axios from 'axios';

class App extends Component {
  state = {
    todos: [
      /*
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
      */
    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      //.then(res=>console.log(res.data))
      .then(res => this.setState({ todos: res.data }))
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

  //Delete Todo
  markDelete = (id) => {
    console.log(id);

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}));

    //  ...  spread operator 
    //this.setState({
    //  todos: [...this.state.todos.filter(todo => todo.id !== id)]
    //});
  }

  //Add Todo
  addTodo = (title) => {
    /*
    console.log(title)
    const newTodo = {
      id: 4,
      // id: uuid.v4(),
      title: title,
      completed: false
     
    } */

    axios.post('https://jsonplaceholder.typicode.com/todos',
      {
        title: title,
        completed: false
      }
    )
      .then(res =>this.setState({todos: [...this.state.todos, res.data] }));

    //this.setState({
    //  todos: [...this.state.todos, newTodo]
    //});
  }

  render() {
    //console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />

            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} markDelete={this.markDelete} />
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
