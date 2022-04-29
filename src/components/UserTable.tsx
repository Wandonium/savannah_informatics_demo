import React, {FunctionComponent, useEffect, useState} from 'react';
import axios from "axios";
import './UserTable.css';

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

interface Props {
    setAddresses: React.Dispatch<React.SetStateAction<Address[]>>
}

const UsersTable: FunctionComponent<Props> = ({setAddresses}) => {
    const [users, setUsers] = useState<User[]>([]);

    const profileImages = [
        "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        "https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        "https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        "https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        "https://images.unsplash.com/photo-1535931737580-a99567967ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        "https://images.unsplash.com/photo-1517702145080-e4a4d91435bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        "https://images.unsplash.com/photo-1517630800677-932d836ab680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXN8ZW58MHx8MHx8&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
    ]

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users";
        axios.get(url)
            .then(response => {
                let users: User[] = response.data;
                let addresses = users.map(user => {
                    return {...user.address, no_of_users: 1}
                });
                // console.log('addresses: ', addresses);
                let countedAddresses: Address[] = [];
                addresses.forEach((address, idx) => {
                    for(let i = 0; i < addresses.length; i++) {
                        if(i !== idx && address.suite === addresses[i].suite){
                            address.no_of_users += 1;
                            addresses.splice(i, 1);
                        }
                    }
                    countedAddresses.push(address);
                })
                // console.log('countedAddresses: ', countedAddresses);
                setUsers(users);
                setAddresses(countedAddresses);
            });
    }, []);

    return (
        <div className="table-responsive">
            <table className="table table-hover table-nowrap">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
                        <th scope="col">website</th>
                        <th scope="col" className="text-center">actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <tr key={user.id} className="table-row">
                        <td>{user.id}</td>
                        <td>
                            <img alt="..." src={profileImages[user.id -1]} className="avatar avatar-sm rounded-circle me-2"/>
                            <a className="text-heading font-semibold name-link" href="#">{user.name}</a>
                        </td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>
                            <div className="row">
                                <div className="col">
                                    <button className="btn-sm btn-primary mr-3">View Posts</button>
                                </div>
                                <div className="col">
                                    <button className="btn-sm btn-success">Update User</button>
                                </div>
                            </div>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable;
