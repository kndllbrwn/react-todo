const React = require('react');
const {connect} = require('react-redux');
import Todo from 'Todo';

export const TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;
        var renderTodos = () => {
             if (todos.length === 0) {
                    return (
                        <p className="container__message">Nothing to do</p>
                    );
                }
            return todos.map ((todo) => {
                return (
                    <Todo key={todo.id} {...todo}/>
                );
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
})

export default connect(
    (state) => {
        return {
            todos: state.todos
        };
    }
)(TodoList);