'use stict';

import React from 'react';
import { Route, MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { listVideosReducer } from '../../reducers/listvideos';
import { selectVideoReducer } from '../../reducers/selectVideo';

const reducers = combineReducers({ listVideosReducer, selectVideoReducer })
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

import Home from './Home';


describe('#Test Home Component', () => {
  it('#Should Home to mach snapshot - all videos without filter', () => {
    const tree = renderer.create(
      <MemoryRouter initialEntries={['/']}>
        <Route exact path='/' render={routeProps => <Home {...routeProps} store={store} />} />
      </MemoryRouter >
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
