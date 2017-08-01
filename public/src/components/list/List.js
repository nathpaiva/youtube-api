'use stict';

import React from 'react';

import Item from '../item/Item';
import listCss from './list.scss';

const List = ({ titleList, videos, moreVideos, videoSelect, classBtn, classList, isFetching }) => (
  <div>
    <div className={listCss.list__title}>
      <h1>{titleList}</h1>
    </div>
    <div className={listCss[classList]}>
      <ul>
        {videos.map((video) => {
          return (
            <Item
              className={listCss.video}
              videoSelect={videoSelect}
              key={video.id.videoId}
              video={video}
            />
          )
        })}
      </ul>
      <button disabled={isFetching} onClick={moreVideos} className={listCss[classBtn]}>
        {isFetching ? '...' : 'carregar mais vídeos...'}
      </button>
    </div>
  </div>
)

export default List;
