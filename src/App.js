
// function App() {
//   return (
//     <h1>
//         Hello world!!
//     </h1>
//   );
// }

// import React, { Component } from 'react';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked!")}}></input>
      </>
    )
  }
}
export default App;
