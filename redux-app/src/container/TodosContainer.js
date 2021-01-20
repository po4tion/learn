import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

function TodosContainer({ input, todos, changeInput, insert, toggle, remove }) {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
}

const mapStateToProps = ({ todos }) => ({
  input: todos.input,
  todos: todos.todos,
});

export default connect(mapStateToProps, {
  changeInput,
  insert,
  toggle,
  remove,
})(TodosContainer);
