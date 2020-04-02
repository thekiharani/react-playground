import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PostView({ match }) {
    useEffect(() => {
        fetchItem();
    }, []);

    const [post, setPost] = useState({});

    const fetchItem = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
        const post = await response.json();
        console.log(post);
        setPost(post);
    }

    return (
        <div className="shop">
            <h1>{ post.title }</h1>
            <div>
                <p>{ post.body }</p>
            </div>
        </div>
    );
}

export default PostView;