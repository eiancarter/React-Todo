import React from 'react';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleChange(e) {
    this.setState({value: e.target.value});
}

handleSubmit() {
    e.preventDefault();
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Todo:
                    <input type='text' value={this.state.value} onChange={handleChange} />
                </label>
                <input type='submit' value='submit' />
            </form>
        );
    }
}

export default TodoForm;