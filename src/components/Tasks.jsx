import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const props = { tasks: state.tasks };
  return props;
};
const actionCreators = {
  removeTask: actions.removeTask,
  toggleTaskStatus: actions.toggleTaskStatus,
};


const Tasks = (props) => {
  const { tasks, removeTask, toggleTaskStatus } = props;
  const handeRemoveTask = (id) => () => {
    removeTask({ id });
  };

  if (tasks.length === 0) {
    return null;
  }

  const handleToggleTaskStatus = (id) => (e) => {
    e.preventDefault();
    toggleTaskStatus({ id });
  };

  return (
    <ul>
      {tasks.map(({ id, text, status }) => (
        <li key={id}>
          <a href="/" onClick={handleToggleTaskStatus(id)}>
            {status === 'active' ? <span>{text}</span> : <s>{text}</s>}
          </a>
          <button type="button" onClick={handeRemoveTask(id)}><span>X</span></button>
        </li>
      ))}
    </ul>
  );
};

export default connect(mapStateToProps, actionCreators)(Tasks);
