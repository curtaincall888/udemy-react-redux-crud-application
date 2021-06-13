// lodashを使うことで取得するresponse内のデータを使いやすく整形する
import _ from 'lodash';
import {CREATE_EVENT, READ_EVENTS, DELETE_EVENT, READ_EVENT, UPDATE_EVENT} from '../actions';

export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      // {id: 10, token: "token123", title: "Let's have an event 10!", body: "This is the body for event 10.", created_at: "2021-06-13T14:03:45.842Z", …}
      return { ...events,  [data.id]: data}
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      delete events[action.id]
      return {...events}
    default:
      return events
  }
}