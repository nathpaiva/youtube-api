'user strict';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import history from './components/history/history';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { listVideosReducer } from './reducers/listvideos';
import { selectVideoReducer } from './reducers/selectVideo';

const reducers = combineReducers({ listVideosReducer, selectVideoReducer })
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

import Home from './components/home/Home';
import Header from './components/header/Header';
import ListFull from './components/listfull/ListFull';

import './css/reset.scss';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Switch>
          <Route exact path='/' history={history} render={routeProps => <Home {...routeProps} store={store} />} />
          <Route path='/videos/:q?' history={history} render={routeProps => <ListFull {...routeProps} store={store} />} />
        </Switch>
      </main>
    );
  }
}

export default App;
