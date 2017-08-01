'use stict';

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../../css/reset.scss';

import List from './List';

const video = [{ "kind": "youtube#searchResult", "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/s8ZF9CpLwD24bWMKeDHKRh1vpNI\"", "id": { "kind": "youtube#video", "videoId": "PmkDh39vWZw" }, "snippet": { "publishedAt": "2017-07-17T17:23:52.000Z", "channelId": "UC9d_htYmYYFUXB2vBKx4NgA", "title": "#012 - Vinicius Rossi | Drops | Front-End Week 2017", "description": "Artigo do Vinicius Rossi sobre a Front-end Week SP: https://medium.com/@vinirossi9/da-trufa-ao-front-end-week-sp-2017-1471562ef70 Site Oficial com todos ...", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/PmkDh39vWZw/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/PmkDh39vWZw/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/PmkDh39vWZw/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "CSS CastShow", "liveBroadcastContent": "none", "views": 136 }, "formatDate": "17 de julho de 2017" }, { "kind": "youtube#searchResult", "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/r1gqN_FsHErmOBUTctnnpNrDmks\"", "id": { "kind": "youtube#video", "videoId": "bp9MxFV8F4A" }, "snippet": { "publishedAt": "2017-07-06T18:06:22.000Z", "channelId": "UC9d_htYmYYFUXB2vBKx4NgA", "title": "#011 - FEMUG SP | Front-End Week 2017", "description": "FEMUG SP: https://www.meetup.com/pt-BR/femugsp/ Site Oficial com todos os eventos da Front End Week SP: http://frontendweek.com.br No Twitter: ...", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/bp9MxFV8F4A/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/bp9MxFV8F4A/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/bp9MxFV8F4A/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "CSS CastShow", "liveBroadcastContent": "none", "views": 120 }, "formatDate": "6 de julho de 2017" }, { "kind": "youtube#searchResult", "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/ddk4RLVj3QtB0JmoG925kAKzD_c\"", "id": { "kind": "youtube#video", "videoId": "xjlIBDBVZok" }, "snippet": { "publishedAt": "2017-07-04T20:42:54.000Z", "channelId": "UC9d_htYmYYFUXB2vBKx4NgA", "title": "#010 - Coletividad | Front-End Week 2017", "description": "Conheça a Coletividad: http://www.coletividad.org/ Site Oficial com todos os eventos da Front End Week SP: http://frontendweek.com.br No Twitter: ...", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/xjlIBDBVZok/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/xjlIBDBVZok/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/xjlIBDBVZok/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "CSS CastShow", "liveBroadcastContent": "none", "views": 77 }, "formatDate": "4 de julho de 2017" }, { "kind": "youtube#searchResult", "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/tz3nxXt7IQGcD2PscqFnd1W14Uc\"", "id": { "kind": "youtube#video", "videoId": "cLydhFnGJ7s" }, "snippet": { "publishedAt": "2017-07-01T21:05:22.000Z", "channelId": "UC9d_htYmYYFUXB2vBKx4NgA", "title": "#009 - HTML SP | Front-End Week 2017", "description": "Site Oficial com todos os eventos da Front End Week SP: http://frontendweek.com.br No Twitter: https://twitter.com/frontendweek https://twitter.com/diogomoretti_ ...", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/cLydhFnGJ7s/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/cLydhFnGJ7s/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/cLydhFnGJ7s/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "CSS CastShow", "liveBroadcastContent": "none", "views": 219 }, "formatDate": "1 de julho de 2017" }];

storiesOf('List', module)
  .add('lista de video da home', () => <List
    titleList='+ Vídeo'
    videos={video}
    videoSelect={video => { }}
    isFetching={false}
    moreVideos={(e) => { }}
    classBtn={'list__more'}
    classList='list__container'
  />)
  .add('lista de video da home carregando vídeos', () => <List
    titleList='+ Vídeo'
    videos={video}
    videoSelect={video => { }}
    isFetching={true}
    moreVideos={(e) => { }}
    classBtn={'list__more'}
    classList='list__container'
  />)
  .add('lista de video full: todos os vídeos do canal', () => <List
    titleList='Todos os vídeos do canal'
    videos={video}
    videoSelect={video => { }}
    isFetching={false}
    moreVideos={(e) => { }}
    classBtn={'list__more'}
    classList='list__container'
  />)
  .add('lista de video full: todos os vídeos do canal carregando vídeos', () => <List
    titleList='Todos os vídeos do canal'
    videos={video}
    videoSelect={video => { }}
    isFetching={true}
    moreVideos={(e) => { }}
    classBtn={'list__more'}
    classList='list__container'
  />)
  .add('lista de video full: busca feita', () => <List
    titleList='Resultados para: Busca feita'
    videos={video}
    videoSelect={video => { }}
    isFetching={false}
    moreVideos={(e) => { }}
    classBtn={'list__more'}
    classList='list__container'
  />);
