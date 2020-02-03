import React from 'react';

const UserCard = (props) => {

  return (
      <div className='ui card'>
        <div className='content'>
          <div className='header'>Tulasi Ratna</div>
          <div className='discription'>
            { props.children }
          </div>
        </div>
        <div className='ui bottom button'>
          <i className='add icon'></i>
          Add Friend
        </div>

      </div>
  )
}

export default UserCard;
