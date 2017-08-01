'use stict';

import React from 'react';

import videoCss from './item.scss'

const Item = ({ video, videoSelect, showViews, className }) => (
  <li className={`${videoCss.video} ${className ? className : ''}`} onClick={() => {
    videoSelect(video);
  }}>
    <img src={video.snippet.thumbnails.medium.url} width="170px" className={videoCss.video__image} />
    <p title={video.snippet.title} className={videoCss.video__title}>{video.snippet.title}</p>
    <span className={videoCss.video__views}>
      <i className={`${videoCss.video__views_icon} fa fa-eye`}></i>
      <span>{video.snippet.views} views</span>
    </span>
  </li>
)
export default Item;
