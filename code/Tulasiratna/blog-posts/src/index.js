import React from 'react';
import ReactDOM from 'react-dom';
import picture from './images/Divith.jpg';
import SingleComment from './SingleComment';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
const App = () => {
  return(
      <div className='ui-comments'>
        <SingleComment />
        <SingleComment />
        <SingleComment />

      </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
