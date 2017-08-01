'user strict';

import { List } from 'immutable';

export function selectVideoReducer(state = new List(), action) {

  if (action.type === 'SELECTFIRST') {
    return [action.list[0]];
  }

  if (action.type === 'SELECTONE') {
    return [action.list];
  }


  return state;
}
