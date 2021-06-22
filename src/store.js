import { createStore } from 'redux';

const reducer = (state = 0, action)=> {
  if(action.type === 'INC'){
    state = state + 1;
  }
  if(action.type === 'DEC'){
    state = state - 1;
  }
  return state;
};

const store = createStore(reducer);

const inc = ()=> {
  return {
    type: 'INC'
  };
};

const dec = ()=> {
  return {
    type: 'DEC'
  };
};

export { inc, dec };
export default store;

