import React from 'react';
import './Comments.css';
import {connect} from "react-redux";
import {removeCommentAC,} from "../../Redux/comment-reducer";
import Comments from "./Comments";

let mapStateToProps = (state) => {

    return {
        index: state.index,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        removeComment: index => {
            dispatch(removeCommentAC(index));
        }
    }
};

const CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(Comments);
export default CommentsContainer;
