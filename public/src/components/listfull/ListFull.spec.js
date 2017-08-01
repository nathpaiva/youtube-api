'use stict';

import React from 'react';
import { Route, Link, MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { listVideosReducer } from '../../reducers/listvideos';
import { selectVideoReducer } from '../../reducers/selectVideo';

const reducers = combineReducers({ listVideosReducer, selectVideoReducer })
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

import ListFull from './ListFull';


describe('#Test ListFull Component', () => {
  it('#Should ListFull to mach snapshot - all videos without filter', () => {
    const tree = renderer.create(
      <MemoryRouter initialEntries={['/videos']}>
        <Route exact path='/videos/:q?' render={routeProps => <ListFull {...routeProps} store={store} />} />
      </MemoryRouter >
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('#Should ListFull to mach snapshot - all videos with filter', () => {
    const videoSelect = jest.genMockFn();

    const tree = renderer.create(
      <MemoryRouter initialEntries={['/videos/ux']}>
        <Route exact path='/videos/:q?' render={routeProps => <ListFull {...routeProps} store={store} />} />
      </MemoryRouter >
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
