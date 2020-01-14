// import React, { Component } from 'react';


// class TodoForm extends Component {
// constructor(props) {
//     super(props);
//     this.state = {
//         taskText: []
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleRemove = this.handleRemove.bind(this);
//     }
//     handleChange = e => {
//     this.setState({
//         taskText: e.target.value
//     });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.addTodo(this.state.taskText);
//     };

//     handleRemove = item => {
//         this.props.handleRemove(item.id);
//     }
//     render() {  
//     return (
//         <form onSubmit={this.handleSubmit}>
//             <label>Todo:
//                 <input 
//                     type = 'text' 
//                     name = 'task'
//                     value = {this.state.task} 
//                     onChange = {this.handleChange} 
//                 />
//             </label>
//             <button>Add Todo</button>
//             <button 
//                 onClick={this.handleRemove}
//                 className='clear-btn' 
//             > Clear Completed
//             </button>
//             <div>
//                 <button onClick={() => {this.handleRemove(item)}} key={item.id}>Clear Completed</button>
//             </div>
//         </form>
//     );
//     }
// }

// export default TodoForm;

import React from 'react';
const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="...todo"
      />
      <button onClick={props.handleAddTodo}>Add Todo</button>
      <button onClick={props.handleClearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;