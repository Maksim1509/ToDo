import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const props = {
    text: state.text,
  };
  return props;
};
const actionCreators = {
  updateText: actions.updateText,
  addTask: actions.addTask,
};

class NewTaskForm extends React.Component {
  handleChangeText = ({ target }) => {
    const { updateText } = this.props;
    updateText({ text: target.value });
  }

  handleAddTask = (e) => {
    e.preventDefault();
    const { text, addTask } = this.props;
    addTask({ task: { id: _.uniqueId(), text, status: 'active' } });
  };

  render() {
    const { text } = this.props;
    return (
      <form onSubmit={this.handleAddTask}>
        <label htmlFor="task-text-form">Введите текст новой задачи.</label>
        <input id="task-text-form" type="text" value={text} onChange={this.handleChangeText} />
        <button type="submit">Добавить</button>
      </form>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(NewTaskForm);
