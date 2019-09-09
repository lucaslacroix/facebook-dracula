import React from 'react';

import './PostCard.css';

import Comment from './Comment';

function PostCard(props) {
    const { avatar, name, hour, post, comments } = props;
    return (
        <div className="post-card">
            <div className="post-container">
                <div className="header-post">
                    <img src={avatar} className="avatar"/>
                    <div className="user-info">
                        <strong>{name}</strong>
                        <span>{hour}</span>
                    </div>
                </div>
                <p>{post}</p>
            </div>
            { comments.map(comment => <Comment key={`${comment.id}`} {...comment}/>) }
        </div>
    )
}

export default PostCard;