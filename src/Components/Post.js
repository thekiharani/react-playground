import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Post() {
    useEffect(() => {
        fetchposts();
    }, []);

    const [posts, setPosts] = useState([]);

    const fetchposts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
        setPosts(data);
    }

    return (
        <div className="post">
            <h1>Latest Post</h1>
            <div>
                { posts.map(post => (
                    <h1 key={ post.id }>
                        <Link to={`/post/${post.id}`} >
                            { post.title }
                        </Link>
                    </h1>
                ))}
            </div>
        </div>
    );
}

export default Post;