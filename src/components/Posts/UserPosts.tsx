import React, { useEffect, useState } from 'react';
import axios from "axios";
import './UserPosts.css';


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

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface UserPostsProps {
    user: User | null;
}

export const UserPosts: React.FC<UserPostsProps> = ({user}) => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${user?.id}`;
        axios.get(url)
            .then(response => {
                console.log('response: ', response.data);
                setPosts(response.data);
            });
    }, []);

    return (
        <div className="px-5">
            <h4>Showing all posts from user: <span className="badge bg-secondary" style={{fontSize: '1em'}}>{user?.username}</span></h4>
            <div className="mt-3">
                { posts.map(post => {
                    return (
                        <div className="card mb-5 bg-success card-p">
                            <div className="card-header">
                                {post.title}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{post.body}</h5>
                                <p className="card-text">{`by ${user?.username} (${user?.name})`}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}