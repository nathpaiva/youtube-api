'use stict';

import React from 'react';
import renderer from 'react-test-renderer';
import { listVideosReducer } from './listvideos';
import { selectVideoReducer } from './selectVideo';


describe('#Test reduces', () => {
  it('#Should check listvideos', () => {
    const response = listVideosReducer([], { type: 'LIST', list: [] });

    expect(typeof response === 'object').toEqual(true);
    expect(response).toMatchSnapshot();
  });

  it('#Should check selectVideoReducer SELECTFIRST', () => {
    const response = selectVideoReducer([], { type: 'SELECTFIRST', list: [{ id: 0 }, { id: 1 }] });

    expect(response[0].id === 0).toEqual(true);
    expect(response).toMatchSnapshot();
  });

  it('#Should check selectVideoReducer SELECTONE', () => {
    const response = selectVideoReducer([], { type: 'SELECTONE', list: { id: 0 } });
    const isArrayResult = Array.isArray(response);

    expect(isArrayResult).toEqual(true);
    expect(response).toMatchSnapshot();
  });
});
