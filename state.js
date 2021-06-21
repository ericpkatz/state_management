class Store{
  constructor(state){
    this.state = state;
    this.listeners = [];
  }
  subscribe(fn){
    this.listeners.push(fn);
    fn();
    return ()=> {
      this.listeners = this.listeners.filter(listener => listener !== fn);
    };
  }
  getState(){
    return this.state;
  }
  dispatch(change){
    this.state = {...this.state, ...change };
    this.listeners.forEach( listener => listener());
  }
}

const store = new Store({ foo: 'bar' });
const unsubscribe1 = store.subscribe(()=> {
  console.log('in subscriber 1');
  console.log(store.getState());
});

const unsubscribe2 = store.subscribe(()=> {
  console.log('in subscriber 2');
  console.log(store.getState());
});

unsubscribe1();
unsubscribe2();
store.dispatch({ foo: 'bazz'});
store.dispatch({ count: 1});
store.dispatch({ count: 2});
store.dispatch({ count: 3});
store.dispatch({ count: 4});
