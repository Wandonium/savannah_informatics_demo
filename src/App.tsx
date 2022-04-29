import React, { useState } from 'react';
// import './App.css';
import UsersTable from "./components/UserTable";
import { Home } from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import { BootstrapTable } from './BootstrapTable';
import { AddressTable } from './components/AddressTable';

type Address = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  no_of_users: number
}

function App() {
  const [active, setActive] = useState('users');
  const [addresses, setAddresses] = useState<Address[]>([]);


  console.log('active: ', active);
  console.log('addresses: ', addresses);

  return (
    <div className="p-10 bg-surface-secondary">
      <Container>
        <Home setActive={setActive} />
        { active === 'users' && <UsersTable setAddresses={setAddresses}/> }
        { active === 'address' && <AddressTable addresses={addresses} /> }
      </Container>
    </div>
  );
}

export default App;
