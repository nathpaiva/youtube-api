'use stict';

import React from 'react'

import Tooltip from '../tooltip/Tooltip';
import highlightCss from '../highlight/highlight.scss'

const Detail = ({ selectedVideo, className, children }) => {
  const videoId = selectedVideo.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`
  return (
    <div className={className ? className : ''}>
      {!!children && children}
      <div className={highlightCss.highlight__video}>
        <iframe width="560" height="310" src={url} frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className={className ? highlightCss.highlight__descmodal : highlightCss.highlight__desc}>
        <span title={selectedVideo.snippet.title} className={className ? highlightCss.highlight__descmodal__title : highlightCss.highlight__desc__title}>{selectedVideo.snippet.title}</span>
        <div className={className ? highlightCss.highlight__descmodal__snippets : highlightCss.highlight__desc__snippets}>
          <i title="" className={`${highlightCss.highlight__desc__snippets_icon} fa fa-eye`}>
            <Tooltip show={selectedVideo.formatDate} />
          </i>
          <i data-views="data" className={`${highlightCss.highlight__desc__snippets_icon} tooltip fa fa-clock-o`}>
            <Tooltip className='tooltiprigth' show={`${selectedVideo.snippet.views} views`} />
          </i>
        </div>
        <p className={className ? highlightCss.highlight__descmodal__text : highlightCss.highlight__desc__text}>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  )
}
export default Detail
