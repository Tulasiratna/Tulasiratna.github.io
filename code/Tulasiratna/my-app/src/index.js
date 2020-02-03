import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const buttonText = { text: 'Reach me!!!' }
  return (
    <div>
      <label htmlFor="name" className="label">Enter e-mail</label>
      <input id="name" type="text"></input>

      <button style={{backgroundColor:'red', color:'white'}}>{ buttonText.text }</button>

    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')

)
