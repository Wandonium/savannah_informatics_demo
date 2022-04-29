import React from 'react';
// import './App.css';
import UsersTable from "./components/UserTable";
import { Home } from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import { BootstrapTable } from './BootstrapTable';

function App() {
  return (
    <div className="p-10 bg-surface-secondary">
      <Container>
        <Home />
        <UsersTable/>
      </Container>
    </div>
  );
}

export default App;
