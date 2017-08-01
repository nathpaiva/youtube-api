'user strict';

import { listVideos, listOneVideos, selectOneVideo } from '../actions/actionList';


import axios from 'axios'
import * as YT from '../config/constants'

var monthNames = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro"
];

const _preapreView = (resp, callback) => {
  var count = 0;
  resp.data.items.map((item, i) => {

    var newDate = new Date(item.snippet.publishedAt);

    item.formatDate = `${newDate.getDate()} de ${monthNames[newDate.getMonth()]} de ${newDate.getFullYear()}`;
    axios.get(`${YT.API_URL_VIEWS}?part=statistics&id=${item.id.videoId}&key=${YT.API_KEY}`)
      .then(response => {
        count++;
        let viewsNumb = Number(response.data.items[0].statistics.viewCount)
        let viewFormat = viewsNumb
        if (viewsNumb >= 1000 && viewsNumb < 1000000) {
          viewFormat = Math.round(viewsNumb / 1000) + 'k';
        } else if (viewsNumb >= 1000000) {
          viewFormat = Math.round(viewsNumb / 1000000) + 'm';
        }

        item.snippet.views = viewFormat;
        if (count === resp.data.items.length) {
          callback(resp);
        }
      });
  });
}

export function loadVideosApi(opt) {

  var params = {
    part: 'snippet',
    key: YT.API_KEY,
    channelId: YT.CHANNEL_ID,
    q: opt.term,
    maxResults: opt.maxResults,
    type: 'video',
    order: 'date'
  }

  return dispatch => {
    axios.get(YT.API_URL, { params: params })
      .then(function (resp) {
        _preapreView(resp, (list) => {
          dispatch(listVideos(list.data.items));
          dispatch(listOneVideos(list.data.items));
        });
      })
      .catch(function (error) {
        console.error(error)
      });
  }
};

export function selectVideo(video) {
  return dispatch => {
    dispatch(selectOneVideo(video));
  }
}
