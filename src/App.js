import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDo: todos
    }
  }
  toggleItem = id = {
  const newTodo = this.state.toDo.map( item => {
    if (item.id === id) {
      return {
        ...item,
        completed: !item.completed
      };
    } else {
      return item;
    }
    this.setState ({
      toDo: newTodo
    })
  }
    addTodo = itemName => {
      const newTodo = {
        name: itemName,
        id: Date.now(),
        completed: false
      };
      this.setState({
        toDo: [...this.state.toDo, newTodo]
      });
    };
    render() {
      console.log('generating todo list...')
      return (
        <div>
          <TodoList />
        </div>
      );
    }

}

export default App;
