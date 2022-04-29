import React from 'react';
import './Home.css';

interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({}) => {
        return (
            <div className="px-4 py-5 my-3 text-center">
                {/* <a href="https://jsonplaceholder.typicode.com/" className="jp-logo">{`{JSON} Placeholder`}</a> */}
                <h1 className="display-5 fw-bold">Savannah Informatics Demo</h1>
                <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">This demo makes use of data from <a className="jp-logo" href="https://jsonplaceholder.typicode.com/">JSON Placeholder</a>. Click on the buttons in the table to either update a particular user's details or view a particular user's posts. Click on the Addresses link to view the number of users living in each address.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Users</button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4 address-l">Addresses</button>
                </div>
                </div>
            </div>
        );
}