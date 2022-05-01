import React, { useEffect, useState } from 'react';
import axios from "axios";
import './UserPosts.css';
import { Loading } from '../Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../App/index';
import { User, Post } from '../../App/actions';

interface UserPostsProps {
    user: User | null;
}

export const UserPosts: React.FC<UserPostsProps> = ({user}) => {
    // const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const { addPosts } = bindActionCreators(actionCreators, dispatch);

    const posts = useSelector((state: State) => state.posts);

    useEffect(() => {
        setLoading(true);
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${user?.id}`;
        axios.get(url)
            .then(response => {
                // console.log('response: ', response.data);
                // setPosts(response.data);
                addPosts(response.data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            { loading ? <Loading /> : (
                <div className="px-5">
                    <h4>Showing all posts from user: <span className="badge bg-secondary" style={{fontSize: '1em'}}>{user?.username}</span></h4>
                    <div className="mt-3">
                        { posts.map(post => {
                            return (
                                <div className="card mb-5 bg-success card-p" key={post.id}>
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
            )}
        </div>
    );
}