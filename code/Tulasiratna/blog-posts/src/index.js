import React from 'react';
import ReactDOM from 'react-dom';
import pic1 from './images/profile.png';
import pic2 from './images/andreas.png';
import pic3 from './images/Divith.jpg';
import SingleComment from './SingleComment';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
const App = () => {
  return(
      <div className='ui-comments'>
        <SingleComment name='Helen' date='Today at 3:00 PM' text='You are awesome' picture={pic1} />
        <SingleComment name='Andreas' date='Today at 4:30 PM' text='Svenska guy' picture={pic2} />
        <SingleComment name='Tulasi' date='Today at 6:00 PM' text='You are my lovely prince' picture={pic3} />

      </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
