import React from 'react';
import './Home.css';

interface HomeProps {
    setActive: React.Dispatch<React.SetStateAction<string>>

}

export const Home: React.FC<HomeProps> = ({setActive}) => {

    const handleClickUser = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setActive('users');
        let btnUsers = document.getElementById('b-users');
        btnUsers?.classList.remove('btn-outline-secondary');
        btnUsers?.classList.remove('address-l');
        btnUsers?.classList.add('btn-primary');

        let btnAddresses = document.getElementById('b-addresses');
        btnAddresses?.classList.remove('btn-primary');
        btnAddresses?.classList.add('btn-outline-secondary');
        btnAddresses?.classList.add('address-l');
    }
    
    const handleClickAddress = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setActive('address');
        let btnAddresses = document.getElementById('b-addresses');
        btnAddresses?.classList.remove('btn-outline-secondary');
        btnAddresses?.classList.remove('address-l');
        btnAddresses?.classList.add('btn-primary');

        let btnUsers = document.getElementById('b-users');
        btnUsers?.classList.remove('btn-primary');
        btnUsers?.classList.add('btn-outline-secondary');
        btnUsers?.classList.add('address-l');
    }

    return (
        <div className="px-4 py-5 my-3 text-center">
            {/* <a href="https://jsonplaceholder.typicode.com/" className="jp-logo">{`{JSON} Placeholder`}</a> */}
            <h1 className="display-5 fw-bold">Savannah Informatics Demo</h1>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">This demo makes use of data from <a className="jp-logo" href="https://jsonplaceholder.typicode.com/">JSON Placeholder</a>. Click on the buttons in the table to either update a particular user's details or view a particular user's posts. Click on the Addresses link to view the number of users living in each address.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" onClick={handleClickUser} id="b-users" className="btn btn-primary btn-lg px-4 gap-3">Users</button>
                <button type="button" onClick={handleClickAddress} id="b-addresses" className="btn btn-outline-secondary btn-lg px-4 address-l">Addresses</button>
            </div>
            </div>
        </div>
    );
}