import React from "react"
import axios from "axios"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"

class TodoContainer extends React.Component {

  // State
  state = {
    todos: [],
    show: false
  };

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      }),
      show: !this.state.show,
    })
  }

  delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response =>
        this.setState({
          todos: [
            ...this.state.todos.filter(todo => {
              return todo.id !== id
            })
          ]
        })
      )
  }

  addTodoItem = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false
      })
      .then(response =>
        this.setState({
          todos: [...this.state.todos, response.data]
        })
      )
  }


  // Using a new lifecycle stage method componentDidMount

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response => this.setState({ todos: response.data }));
  }

  render() {
    return(

      // returned JSX needs to be in a container of some sort, either <div></div>, <React.Fragment></React.Fragment> or <></>
      <div className="container">
        <Header headerSpan={ this.state.show } />
        <InputTodo addTodoProps={ this.addTodoItem } />
        <TodosList
          todos={ this.state.todos }
          handleChangeProps={ this.handleChange }
          deleteTodoProps={ this.delTodo }
        />
      </div>
    )
  }
}

export default TodoContainer
