import React from 'react';
import ReactDOM from 'react-dom';

const time = new Date().getHours();

console.log(time);

let greeting;

const customStyle = {
  color: "",
};

if (time < 12) {
  greeting = 'Good Morning';
  customStyle.color = 'red';
} else if (time > 12 && time < 18) {
  greeting = 'Good Afternoon';
  customStyle.color = 'blue';

} else {
 greeting = 'Good Night';
 customStyle.color = 'green';

}


ReactDOM.render(

    <h1 className='heading' style={customStyle}>{greeting}</h1>,

  document.getElementById('root')
);

