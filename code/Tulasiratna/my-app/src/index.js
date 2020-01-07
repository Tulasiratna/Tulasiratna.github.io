import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <label for="name" className="label">Enter e-mail</label>
      <input id="name" type="text"></input>
      <button style={{backgroundColor:'red', color:'white'}}>Submit</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')

)
