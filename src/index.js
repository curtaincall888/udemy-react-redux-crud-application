import React from 'react';
import ReactDOM from 'react-dom';
// reduxパッケージにstoreを作成する為の関数 'createStore' が定義されている
// applyMiddlewareはミドルウェアを適用する為の関数（redux-thunkの為）
import { createStore, applyMiddleware } from 'redux';
// 作成したstoreを全コンポーネントに渡す為の機能をもつ特殊なコンポーネント
import { Provider } from 'react-redux';
// redux-thunkはmiddlewareに該当する
// action-creatorがactionの替わりに関数を返すことができるようになる
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import reportWebVitals from './reportWebVitals';

// createStoreの第二引数にapplyMiddlewareを、その引数にthunkを渡すことで組み込まれる
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/events/new" component={EventsNew} />
        <Route exact path="/" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
