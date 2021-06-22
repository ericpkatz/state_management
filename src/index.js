import Display from './Display';
import store, { inc, dec } from './store';

import React, { Component } from 'react';
import { render } from 'react-dom';


setInterval(()=> {
  store.dispatch(inc());
}, 1000);
class App extends Component{
  constructor(){
    super();
    this.state = {
      count: store.getState()
    };
  }
  componentDidMount(){
    store.subscribe(()=> {
      this.setState({ count: store.getState()});
    });
  }
  render(){
    const { count } = this.state;
    return (
      <main>
        <span>{ count }</span>
        <button onClick={ ()=> store.dispatch(inc()) }>+</button>
        <button onClick={ ()=> store.dispatch(dec())}>-</button>
        <Display count={ count } />
        <Display count={ count } />
        <Display count={ count } />
        <Display count={ count } />
      </main>
    );
  }
}

render(<App />, document.querySelector('#root'));
