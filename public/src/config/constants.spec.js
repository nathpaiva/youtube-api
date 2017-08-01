'use stict';

import React from 'react';
import renderer from 'react-test-renderer';
import * as YT from './constants';


describe('#Test value of constants', () => {
  it('#Should check API_KEY', () => {
    const response = YT.API_KEY;

    expect(response === 'AIzaSyCwChe2uQJtgQQuMdTdzJFgDC3J3Bx35Po').toEqual(true);
    expect(response).toMatchSnapshot();
  });

  it('#Should check MIN_INCREMENTS', () => {
    const response = YT.MIN_INCREMENTS;
    expect(response === 4).toEqual(true);

    expect(response).toMatchSnapshot();
  });

  it('#Should check MAX_RESULTS', () => {
    const response = YT.MAX_RESULTS;
    expect(response === 4).toEqual(true);

    expect(response).toMatchSnapshot();
  });

  it('#Should check CHANNEL_ID', () => {
    const response = YT.CHANNEL_ID;
    expect(response === 'UC9d_htYmYYFUXB2vBKx4NgA').toEqual(true);

    expect(response).toMatchSnapshot();
  });

  it('#Should check API_URL', () => {
    const response = YT.API_URL;
    expect(response === 'https://www.googleapis.com/youtube/v3/search').toEqual(true);

    expect(response).toMatchSnapshot();
  });

  it('#Should check API_URL_VIEWS', () => {
    const response = YT.API_URL_VIEWS;
    expect(response === 'https://www.googleapis.com/youtube/v3/videos').toEqual(true);

    expect(response).toMatchSnapshot();
  });
});
