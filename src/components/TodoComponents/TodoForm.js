import React from 'react';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskText: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({
            taskText: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.taskText);
    };

    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label>Todo:
                    <input 
                        type = 'text' 
                        name = 'task'
                        value = {this.state.taskText} 
                        onChange = {this.handleChange} 
                    />
                </label>
                <button>Add Todo</button>
            </form>
            <button
                className='clear-btn'
                onChange={this.handleSubmit}>Completed
            </button>
            </>
        );
    }
}

export default TodoForm;