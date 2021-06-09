import { Component } from 'react';
// stateやaction,componentを関連づけるconnect関数
import { connect } from 'react-redux';
import _ from 'lodash';

// actions/index.jsのincrement関数とdecrement関数をimport
import { readEvents } from '../actions';
import { thunk } from 'redux-thunk';

class EventsIndex extends Component {

      // Ruduxに置いては、状態(state)はstoreで一括管理されていて、
    // それをAppコンポーネントで受け取ることができます。但し、
    // 受け取るには以下のようなmapStateToPropsが必要になります。
    // つまり、Reduxが管理する状態の内、どの要素をコンポーネントは
    // 参照したいのか？を定義する必要があります。
    // 以下の処理によってコンポーネントの関心の対象を必要十分なスコープに絞っています。
    // const mapStateToProps = state => ({ value: state.count.value })
    // Reduxに置いては決まりのようなものと認識
  
  // componentDidMount()はコンポーネントがマウントされる時に呼ばれるメソッド
  // イベント一覧画面には初期初期マウント時に外部のAPIサーバーに対してイベントの一覧を取得する処理を実行する
  // その処理自体はactionsに記述する
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
      </>
    )
  }
}

// mapStateToPropsはstateの情報からこのcomponentに必要なものを取り出して
// component内のpropsとしてマッピングする機能をもつ関数
// 引数には状態のトップレベルを示すstateを書いて、どういったオブジェクトをpropsとして
// 対応させるのかということを関数の戻り値として定義する
const mapStateToProps = state => ({ events: state.events })

// mapDispatchToProps
// あるアクションが発生した時にreducerにtypeに応じた状態遷移を実行させる為の関数がdispatch
// このdispatch関数を引数に置いてこのコンポーネントで必要となるdispatch関数を宣言する
// 以下の記述は省略記法
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
