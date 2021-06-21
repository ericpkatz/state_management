const { createStore } = require('redux');

const reducer = (state = {foo: 'bar', count: 0}, action)=> {
  if(action.type === 'CHANGE'){
    state = {...state, ...action.change };
  }
  if(action.type === 'INC'){
    state = {...state, count: state.count + 1};
  }
  if(action.type === 'SET_FOO'){
    state = {...state, foo: action.value}; 
  }
  return state;
};

const store = createStore(reducer);

const unsubscribe = store.subscribe(()=> {
  console.log(store.getState());
});

const inc = ()=> {
  return {
    type: 'INC',
  };
};

const setFoo = (value)=> {
  return {
    type: 'SET_FOO',
    value
  };
};

store.dispatch({type: 'CHANGE', change: { bazz: 'quq'}});
store.dispatch({type: 'CHANGE', change: { foo: 'quq'}});
store.dispatch(inc());
store.dispatch(inc());
store.dispatch(inc());
store.dispatch(inc());
unsubscribe();
store.dispatch(setFoo(42));
store.dispatch(setFoo(43));
store.dispatch(setFoo(44));
