'user strict';

export function listVideos(list) {
  return { type: 'LIST', list };
}

export function listOneVideos(list) {
  return { type: 'SELECTFIRST', list };
}

export function selectOneVideo(list) {
  return { type: 'SELECTONE', list };
}
