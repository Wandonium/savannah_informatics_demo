import React, { useState } from 'react';
// import './App.css';
import UsersTable from "./components/Users/UserTable";
import { Home } from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { AddressTable } from './components/Addresses/AddressTable';
import { UserPosts } from './components/Posts/UserPosts';
import { User } from './App/actions';

function App() {
  const [active, setActive] = useState('users');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showPostNav, setShowPostNav] = useState(false);

  return (
    <div className="p-10 bg-surface-secondary">
      <Container>
        <Home setActive={setActive} showPostNav={showPostNav} setShowPostNav={setShowPostNav} />
        {
          active === 'users' &&
            <UsersTable 
              setCurrentUser={setCurrentUser} 
              setActive={setActive} 
              setShowPostNav={setShowPostNav}
            /> 
        }
        {active === 'address' && <AddressTable />}
        {active === 'posts' &&  <UserPosts user={currentUser} />}
      </Container>
    </div>
  );
}

export default App;
