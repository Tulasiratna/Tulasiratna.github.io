import React from 'react';
import Avatar from './Avatar';
import Detail from './Detail';
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h1 className="name">{props.name}</h1>
        <Avatar image={props.image}/>
      </div>
      <div className="bottom">
        <Detail detailInfo={props.phone} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
    )
}

export default Card;
