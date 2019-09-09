import React from 'react';
import {connect} from "react-redux";
import Form from "./Form";
import {addCommentAC, updateCommentTextAC, updateNameTextAC} from "../Redux/comment-reducer";

let mapStateToProps = (state) => {

    return {
        comments: state.commentsPage.comments,
        newCommentText: state.commentsPage.newCommentText,
        newNameText: state.commentsPage.newNameText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addComment: () => {
            dispatch(addCommentAC());
        },

        updateName: (textName) => {
            dispatch(updateNameTextAC(textName))
        },
        updateComment: (commentText) => {
            dispatch(updateCommentTextAC(commentText))
        }
    }
};

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);
export default FormContainer;
