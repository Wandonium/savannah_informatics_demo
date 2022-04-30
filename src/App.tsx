import React, { useState } from 'react';
// import './App.css';
import UsersTable from "./components/Users/UserTable";
import { Home } from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { AddressTable } from './components/Addresses/AddressTable';
import { UserPosts } from './components/Posts/UserPosts';

type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  address: Address
}

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
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showPostNav, setShowPostNav] = useState(false);


  // console.log('active: ', active);
  // console.log('addresses: ', addresses);

  return (
    <div className="p-10 bg-surface-secondary">
      <Container>
        <Home setActive={setActive} showPostNav={showPostNav} setShowPostNav={setShowPostNav} />
        {
          active === 'users' &&
            <UsersTable 
              setAddresses={setAddresses} 
              setCurrentUser={setCurrentUser} 
              setActive={setActive} 
              setShowPostNav={setShowPostNav}
            /> 
        }
        {active === 'address' && <AddressTable addresses={addresses} />}
        {active === 'posts' &&  <UserPosts user={currentUser} />}
      </Container>
    </div>
  );
}

export default App;
