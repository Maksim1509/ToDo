import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const text = handleActions({
  [actions.updateText](_state, action) {
    return action.payload.text;
  },
  [actions.addTask]() {
    return '';
  },
}, '');

const tasks = handleActions({
  [actions.addTask](state, action) {
    const { task } = action.payload;
    return [task, ...state];
  },
  [actions.removeTask](state, action) {
    const { id } = action.payload;
    return state.filter((task) => task.id !== id);
  },
  [actions.toggleTaskStatus](state, action) {
    const { id } = action.payload;
    const currentTask = state.find((task) => task.id === id);
    const restState = state.filter((task) => task.id !== id);
    const newStatus = currentTask.status === 'active' ? 'finished' : 'active';
    const updatidTask = { ...currentTask, status: newStatus };
    return [...restState, updatidTask];
  },
}, []);

export default combineReducers({
  text,
  tasks,
});
