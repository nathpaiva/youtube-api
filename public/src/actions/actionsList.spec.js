'use stict';

import React from 'react';
import renderer from 'react-test-renderer';
import { listVideos, listOneVideos, selectOneVideo } from './actionList';


describe('#Test actions', () => {
  it('#Should check list videos', () => {
    const response = listVideos([]);
    expect(response.type === 'LIST').toEqual(true);

    expect(response).toMatchSnapshot();
  });

  it('#Should check list one videos', () => {
    const response = listOneVideos([]);
    expect(response.type === 'SELECTFIRST').toEqual(true);

    expect(response).toMatchSnapshot();
  });

  it('#Should check list one videos', () => {
    const response = selectOneVideo([]);
    expect(response.type === 'SELECTONE').toEqual(true);

    expect(response).toMatchSnapshot();
  });
});
