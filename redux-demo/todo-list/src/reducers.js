import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;

/*
 * 子 reducer
 */
function visibilityFilter(state = SHOW_ALL, action) {
  console.log('visibilityFilter reducer');
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  console.log('todos reducer');
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: !state[action.index].completed
        }),
        ...state.slice(action.index + 1)
      ]      
    default:
      return state;
  }
}

/*
 * reducer
 */
const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;