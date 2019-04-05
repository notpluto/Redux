import React, { Component } from 'react'
import '../index.scss'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function uuid() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); 
}

 class App extends Component {
  constructor() {
    super()
    this.state = {
      input: "",
    }
  }

  handleChange = (e) => { 
    this.setState({input: e.target.value})
  }
  handleAddTodo = () => {
     if (this.state.input){
      this.props.dispatch({type: "ADD_TODO", name: this.state.input, id: uuid(), isDone: false});
      this.setState({input: ""})
    } 
  }
  handleToggle = (id) => {
    this.props.dispatch({type: "TOGGLE_TODO", id })
  }
  handleDelete = (id) => {
    this.props.dispatch({type: "DELETE_TODO", id})
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <h3> Todos</h3>
          <input type="text" value={this.state.input} onChange= {this.handleChange} className="todo-input"/>
          <button type="submit" onClick= {this.handleAddTodo}>Add</button>
          <div className="list">
            {
              this.props.todos.map((todo, id) => 
              <div className="list-item" key={id}>
                <input type="checkbox" checked={todo.isDone} onChange= {() => this.handleToggle(todo.id)}/> 
                <div className="todo">{todo.name}</div>
                <span onClick= {() => this.handleDelete(todo.id)}> x </span>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {todos: state};
}

export default connect(mapStateToProps)(App);


