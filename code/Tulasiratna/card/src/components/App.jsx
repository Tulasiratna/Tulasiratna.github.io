import React from 'react';
import Card from './Card';
import contacts from '../contacts';

function createCard(contact) {
  return (
      <Card
        key={contact.id}
        name={contact.name}
        image={contact.image}
        phone={contact.phone}
        email={contact.email}
      />
    )
}
function App() {
  return(
    <div>
      <h1 className="heading">My contacts</h1>
      {contacts.map(createCard)}
       {/*<Card
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
      />*/}
    </div>
  )
}

export default App;
