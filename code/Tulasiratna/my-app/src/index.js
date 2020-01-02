import React from 'react'; // library name react
import ReactDOM from 'react-dom'; // library name react-dom

const App = () => {
  return(
    <div>My First React App!!!!!!!</div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')

)
