import React from 'react';
import './Comments.css';
// import {removeCommentAC} from "../../Redux/comment-reducer";

const Comments = (props, index) => {

    let onRemoveComment = (id) => {
        debugger;
        console.log(id);
        props.removeComment(id);
    };


    return (
        <div className="item">
            <span>{props.name}</span>
            <span>{props.message}</span>
            <span>{props.date}</span>
            <button className="button" onClick={() => props.removeComment(props.id)}>Remove</button>
        </div>
    );
};

export default Comments;