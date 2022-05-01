import React from 'react'
import './AddressTable.css';
import { useSelector } from 'react-redux';
import { State } from '../../App/index';

export const AddressTable: React.FC = () => {

    const addresses = useSelector((state: State) => state.addresses);

    const getClass = (suite: string) => {
        if(suite.includes('Suite')) {
            return 'badge bg-soft-success text-success';
        } else return 'badge bg-soft-primary text-primary';
    }

    return (
        <div className="table-responsive">
            <table className="table table-hover table-nowrap">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">street</th>
                        <th scope="col">suite</th>
                        <th scope="col">city</th>
                        <th scope="col">zipcode</th>
                        <th scope="col">no of users</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        addresses.map(address => <tr key={address.zipcode} className="table-row">
                            <td>{address.street}</td>
                            <td>
                                <span className={getClass(address.suite)}>{address.suite}</span>
                            </td>
                            <td>{address.city}</td>
                            <td>{address.zipcode}</td>
                            <td>
                                <span className='badge bg-soft-dark text-dark'>{address.no_of_users}</span>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
}