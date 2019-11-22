import { combineReducers, createStore } from 'redux';

// actions.js
export const activateClick = click => ({
  type: 'ACTIVATE_CLICK',
  click,
});

export const closeClick = () => ({
  type: 'CLOSE_CLICK',
});

// reducers.js
export const click = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_CLICK':
      return action.click;
    case 'CLOSE_CLICK':
      return {};
    default:
      return state;
  }
};

export const reducers = combineReducers({
  click,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
