const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const TodoForm = require('TodoForm');

describe('TodoForm', () => {
    it('should exist', () => {
        expect(TodoForm).toExist();
    });

    it('should call onAddTodo if valid data is passed', () => {
        var todoText = 'stuff'
        var spy = expect.createSpy();
        var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoForm));

        todoForm.refs.newtodo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should not call onAddTodo if invalid data is passed', () => {
        var todoText = ''
        var spy = expect.createSpy();
        var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoForm));

        todoForm.refs.newtodo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});