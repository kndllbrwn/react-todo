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
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
        },
        {
          id: uuid(),
          text: 'Add another todo'
        },
        {
          id: uuid(),
          text: 'Be the man!'
        }]
      }
    },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos, 
        {
          id: uuid(),
          text
        }
        ]
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
        <TodoList todos={todos} />
        {renderAddTodoForm()}
      </div>
    )
  }
});

module.exports = TodoApp;
