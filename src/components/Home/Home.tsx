import React, { useState } from 'react';
import './Home.css';

interface HomeProps {
    setActive: React.Dispatch<React.SetStateAction<string>>;
    setShowPostNav: React.Dispatch<React.SetStateAction<boolean>>;
    showPostNav: boolean;
}

export const Home: React.FC<HomeProps> = ({setActive, showPostNav, setShowPostNav}) => {

    const [nav, setNav] = useState('users');
    
    const activeNav = "btn btn-primary btn-lg px-4 gap-3";
    const inactiveNav = "btn btn-outline-secondary btn-lg px-4 address-l";

    const handleClickUser = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setActive('users');
        setNav('users');
        setShowPostNav(false);
    }
    
    const handleClickAddress = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setActive('address');
        setNav('addresses');
        setShowPostNav(false);
    }

    return (
        <div className="px-4 py-5 my-3 text-center">
            <h1 className="display-5 fw-bold">Savannah Informatics Demo</h1>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">This demo makes use of data from <a className="jp-logo" href="https://jsonplaceholder.typicode.com/">JSON Placeholder</a>. Click on the buttons in the table to either update a particular user's details or view a particular user's posts. Click on the Addresses link to view the number of users living in each address.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button 
                    type="button" 
                    onClick={handleClickUser} 
                    id="b-users" 
                    className={nav === 'users' && !showPostNav ? activeNav : inactiveNav}
                >Users</button>
                <button 
                    type="button" 
                    onClick={handleClickAddress} 
                    id="b-addresses" 
                    className={nav === 'addresses' ? activeNav : inactiveNav}
                >Addresses</button>
                { showPostNav && <button type="button" className={activeNav}>Posts</button>}
            </div>
            </div>
        </div>
    );
}