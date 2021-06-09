// lodashを使うことで取得するresponse内のデータを使いやすく整形する
import _ from 'lodash';
import { READ_EVENTS } from '../actions';

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}