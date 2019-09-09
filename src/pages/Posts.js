import React, { Component } from 'react';
import postsJson from '../posts';

import './Posts.css';

import Header from '../components/Header';
import PostCard from '../components/PostCard';

class Posts extends Component {
    state = {
        posts: [...postsJson.posts]
    }

    render () {
        return (
            <>
                <Header />
                <div className="posts-container" >
                    {
                        this.state.posts.map(post => (
                            <PostCard 
                                key={`${post.id}`} 
                                avatar={post.avatar}
                                name={post.name}
                                post={post.post}
                                hour={post.hour}
                                comments={[...post.comments]}
                            />
                        ))
                    }
                </div>
            </>
        )
    }
}

export default Posts