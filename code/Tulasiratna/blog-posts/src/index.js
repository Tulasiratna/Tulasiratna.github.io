import React from 'react';
import ReactDOM from 'react-dom';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
const App = () => {
  return(
      <div className='ui-comments'>
        <div className='comment'>
          <a href=" /" className='avatar'>
            <img alt="Profile picture" />
          </a>

          <div className='content'>
            <a href=" /" className='author'>
            Tulasi
            </a>

            <div className='metadata'>
              <span className='date'>
                Today at 9:00 PM
              </span>
            </div>
            <div className='text'>
              It's amazing!!!!!
            </div>
          </div>
        </div>

      </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
