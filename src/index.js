import React from 'react';
import ReactDOM from 'react-dom';
// reduxパッケージにstoreを作成する為の関数 'createStore' が定義されている
import { createStore } from 'redux';
// 作成したstoreを全コンポーネントに渡す為の機能をもつ特殊なコンポーネント
import { Provider } from 'react-redux';

import './index.css';
import reducer from './reducers';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
