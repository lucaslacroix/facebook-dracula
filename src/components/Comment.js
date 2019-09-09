import React from 'react';

import './Comment.css'

function Comment (props) {
    const { avatar, name, comment, hour } = props;

    return (
        <div className="comment-container">
            <img src={avatar} className="avatar" />
            <div className="comment-bubble">
                <strong>{name}</strong>
                <p>{comment}</p>
                <span>{hour}</span>
            </div>
        </div>
    )
}

export default Comment;