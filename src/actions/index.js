import { createAction } from 'redux-actions';

export const updateText = createAction('TEXT_UPDATE');
export const addTask = createAction('TASK_ADD');
export const removeTask = createAction('TASK_REMOVE');
export const toggleTaskStatus = createAction('TASK_STATUS_TOGGLE');
