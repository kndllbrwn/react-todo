const React = require('react');
const TodoList = require('TodoList');
const TodoForm = require('TodoForm');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');

const TodoApp = React.createClass({
  getInitialState: function () {
      return {
        showCompleted: false,
        searchText: '',
        todos: [
          {
          id: uuid(),
          text: 'Walk the dog',
          completed: true
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        },
        {
          id: uuid(),
          text: 'Add another todo',
          completed: false
        },
        {
          id: uuid(),
          text: 'Be the man!',
          completed: false
        }]
      }
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
