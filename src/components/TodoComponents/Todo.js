// import React from 'react';


// const Todo = props => {
//     return (
//         <div 
//             className={`item${props.item.completed ? ' completed' : ''}`}
//             onClick={() => props.toggleItem(props.item.id)}
//         >
//             <p>{props.item.task}</p>
//         </div>
//     );
// };

// export default Todo;

import React from 'react';

const Todo = props => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: 'line-through' } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;