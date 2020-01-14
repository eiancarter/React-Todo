// import React, { Component } from 'react';
// import TodoList from './components/TodoComponents/TodoList';
// import TodoForm from './components/TodoComponents/TodoForm';
// import './components/TodoComponents/Todo.css';


// class App extends Component {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
//   constructor() {
//     super();
//     this.state = {
//       toDo: []
//     };
//   }


//   toggleItem = id => {
//     const newTodo = this.state.toDo.map(item => {
//       if (item.id === id) {
//         return {
//           ...item,
//           completed: !item.completed
//         };
//       } else {
//         return item;
//       }
//     });
//     this.setState ({
//       toDo: newTodo
//     });
//   };

//   //add todo item
//   addTodo = itemName => {
//     const newTodo = {
//       task: itemName,
//       id: Date.now(),
//       completed: false
//     };
//     this.setState({
//       toDo: [...this.state.toDo, newTodo]
//     });
//   };
//   //remove todo item
//   handleRemove(id){
//     this.setState({
//       toDo: this.state.toDo.filter(el => el !== id)
//     })
//   }

//   render() {
//     console.log('generating todo list...');
//     return (
//       <div className='container'>
//         <h1>Todo List</h1>
//         <TodoForm addTodo={this.addTodo}  handleRemove={this.handleRemove}/>
//         <TodoList todos={this.state.toDo} toggleItem={this.toggleItem} />
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
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
      ],
      todo: ''
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = e => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: '' });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });

  toggleTodoComplete = id => {
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  clearCompletedTodos = e => {
    e.preventDefault();
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;