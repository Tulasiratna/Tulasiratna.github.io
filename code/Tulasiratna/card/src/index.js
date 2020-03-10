import React from 'react';
import ReactDOM from 'react-dom';


function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.image}
      alt="" width="300" height="300" />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
    )
}

ReactDOM.render(
  <div>
    <Card
      name="Benny"
      image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      phone="Phone: +123456789"
      email="Email: benny@text.co"
    />
    <Card
      name="Line"
      image="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      phone="Phone: +987654321"
      email="Email: line123@hello.co"
    />
    <Card
      name="James"
      image="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      phone="Phone: +46739993921"
      email="Email: james@outlook.co"
    />
  </div>,
    document.getElementById('root')
);


