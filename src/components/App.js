import { Component } from 'react';
// stateやaction,componentを関連づけるconnect関数
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';

class App extends Component {
  render() {
    const props = this.props
    return (
      <>
        <div>count: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </>
    )
  }
}

// mapStateToPropsはstateの情報からこのcomponentに必要なものを取り出して
// component内のpropsとしてマッピングする機能をもつ関数
// 引数には状態のトップレベルを示すstateを書いて、どういったオブジェクトをpropsとして
// 対応させるのかということを関数の戻り値として定義する
const mapStateToProps = state => ({ value: state.count.value })

// mapDispatchToProps
// あるアクションが発生した時にreducerにtypeに応じた状態遷移を実行させる為の関数がdispatch
// このdispatch関数を引数に置いてこのコンポーネントで必要となるdispatch関数を宣言する
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
