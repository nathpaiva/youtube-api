'use stict';

import React, { Component } from 'react'

import highlightCss from './highlight.scss'

import Detail from '../detail/Detail'

const Highlight = ({ selectedVideo }) => (
  <div className={highlightCss.highlight}>
    <div className={highlightCss.highlight__title}>
      <h1>Vídeo em destaque</h1>
    </div>
    <Detail selectedVideo={selectedVideo} />
  </div>
);

export default Highlight;
