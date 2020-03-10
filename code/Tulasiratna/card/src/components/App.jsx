import React from 'react';
import Card from './Card';
import contacts from '../contacts';
function App() {
  return(
    <div>
      <h1 className="heading">My contacts</h1>
      <Card
        name={contacts[0].name}
        image={contacts[0].image}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        image={contacts[1].image}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        image={contacts[2].image}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  )
}

export default App;
