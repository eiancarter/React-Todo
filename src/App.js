import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDo: todos
    };
  }
  toggleItem = id => {
    const newTodo = this.state.toDo.map( item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    this.setState ({
      toDo: newTodo
    });
  };
  addTodo = itemName => {
    const newTodo = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      toDo: [...this.state.toDo, newTodo]
    });
  };
  // clearCompleted = itemName => {
  //   const newComplete = {
  //     task: itemName,
  //     id: Date.now(),
  //     completed: true
  //   };
  //   this.setState({
  //     toDo: [...this.setState.toDo, newComplete]
  //   });
  // };

  render() {
    console.log('generating todo list...');
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos={this.state.toDo} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;
