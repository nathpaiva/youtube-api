'user strict';

import { List } from 'immutable';

export function listVideosReducer(state = new List(), action) {

  if (action.type === 'LIST') {
    return new List(action.list);
  }

  return state;
}
