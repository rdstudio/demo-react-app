import React, { Component } from "react"

class InputTodo extends Component {

  // Since we created a "state" object at this level this.setState modifies the state here, not on TodoContainer

  state = {
    title: ""
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // We are pushing data "up the tree" to TodoContainer but utilizing the props and addTodoItem function from the TodoContainer
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: ""
    });
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit } className="form-container">
        <input type="text" className="input-text" name="title" value={ this.state.title } placeholder="Add Todo..." onChange={ this.onChange } />
        <input type="submit" className="input-submit" value="Submit" />
      </form>
    )
  }
}

export default InputTodo
