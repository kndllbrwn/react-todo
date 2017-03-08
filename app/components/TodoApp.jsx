const React = require('react');
const TodoList = require('TodoList');
const TodoForm = require('TodoForm');
const TodoSearch = require('TodoSearch');

const TodoApp = React.createClass({
  getInitialState: function () {
      return {
        showCompleted: false,
        searchText: '',
        todos: [
          {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Add another todo'
        },
        {
          id: 4,
          text: 'Be the man!'
        }]
      }
    },
  handleAddTodo: function (text) {
    alert('new todo :' + text);
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
