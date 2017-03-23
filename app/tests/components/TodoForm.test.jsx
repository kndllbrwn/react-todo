const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const {TodoForm} = require('TodoForm');

describe('TodoForm', () => {
    it('should exist', () => {
        expect(TodoForm).toExist();
    });

    it('should dispatch ADD_TODO when valid todo text', () => {
        var todoText = 'stuff';
        var action = {
            type: 'ADD_TODO',
            text: todoText
        }
        var spy = expect.createSpy();
        var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoForm));

        todoForm.refs.newtodo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when valid todo text', () => {
        var todoText = ''
        var spy = expect.createSpy();
        var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoForm));

        todoForm.refs.newtodo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});