const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export const TodoForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var newTodo = this.refs.newtodo.value;

        if (newTodo.length > 0 ) {
            this.refs.newtodo.value = '';
            dispatch(actions.addTodo(newTodo));
        } else {
            this.refs.newtodo.focus();
        }
    },
    render: function() {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit} className="">
                    <input type="text" ref="newtodo" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
})

export default connect()(TodoForm);