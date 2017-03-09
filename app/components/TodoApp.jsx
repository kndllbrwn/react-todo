const React = require('react');
const uuid = require('node-uuid');

const TodoList = require('TodoList');
const TodoForm = require('TodoForm');
const TodoSearch = require('TodoSearch');
const TodoAPI = require('TodoAPI');

const TodoApp = React.createClass({
  getInitialState: function () {
      return {
        showCompleted: false,
        searchText: '',
        todos: TodoAPI.getTodos()
      }
    },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos, 
        {
          id: uuid(),
          text,
          completed: false
        }
        ]
    })
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map(function (todo) {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      
      return todo;
    });

    this.setState({
      todos: updatedTodos
    })
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function () {
    var renderAddTodoForm =  () => {
      return <TodoForm onAddTodo={this.handleAddTodo}/>
    }
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        {renderAddTodoForm()}
      </div>
    )
  }
});

module.exports = TodoApp;
