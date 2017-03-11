const React = require('react');

const TodoForm = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var newTodo = this.refs.newtodo.value;

        if (newTodo.length > 0 ) {
            this.refs.newtodo.value = '';
            this.props.onAddTodo(newTodo);
        } else {
            this.refs.newtodo.focus();
        }
    },
    render: function() {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit} className="">
                    <input type="text" ref="newtodo" placeholder="What do you need to do?"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        )
    }
})

module.exports = TodoForm;