import React from 'react';
import ReactDOM from 'react-dom';
import pic1 from './images/mine.jpg';
import pic2 from './images/hubby.jpg';
import pic3 from './images/son.jpg';
import SingleComment from './SingleComment';
import UserCard from './UserCard';


  // UserCard is parent component and SinglrComment is child component
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
const App = () => {
  return(
      <div className='ui-comments'>
        <UserCard>
          <div>Hello my name is Kranthi, I live in Stockholm and works at Ericsson.</div>
        </UserCard>
        <UserCard>
          <SingleComment
          name='Tulasi'
          date='Today at 3:00 PM'
          text='You are awesome'
          picture={pic1}
          />
        </UserCard>
        <UserCard>
          <SingleComment
          name='Kranthi'
          date='Today at 4:30 PM'
          text='Love of my life'
          picture={pic2}
          />
        </UserCard>
        <UserCard>
          <SingleComment
          name='Divith'
          date='Today at 6:00 PM'
          text='You are such a naughty kid!!!!!!!'
          picture={pic3}
          />
        </UserCard>

      </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
