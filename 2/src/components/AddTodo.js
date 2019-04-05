import React from 'react';

class AddTodo extends React.Component {
	constructor(){
		super()
		this.state = {
			input	: ""
		}
	}

	newInput = input => {
		this.setState({input})
	}

	handleAddTodo = () => {
		this.addTodo(this.state.input)
		this.setState({input: ""})
	}
	
	render() {
		return (
			<div>
				<input value={this.state.input} onChange={(e) => this.newInput(e.target.value)}/>
				<button onClick={this.handleAddTodo} />
			</div>

			)
	}
}

