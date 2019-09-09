import React from 'react';
import './Form.css';
import CommentsContainer from "./Comments/CommentsContainer";

const Form = (props) => {

    let newNameElement = React.createRef();
    let newCommentElement = React.createRef();

    let onAddComment = () => {

        props.addComment();
        props.updateName(newNameElement.current.value = '');
        props.updateComment(newNameElement.current.value = '');
    };
    let onNameChange = () => {

        let textName = newNameElement.current.value;

        props.updateName(textName);
    };

    let onCommentChange = () => {

        let textCom = newCommentElement.current.value;

        props.updateComment(textCom);
    };

    //render post from state
   let CommentsElement = props.comments.map( comments => <CommentsContainer removeComment={props.removeComment} name={comments.name} message={comments.message} id={comments.id} key={comments.id} index={comments.id} date={comments.date}/> );

    return (
        <main>
            <div className="form">
                <input
                    onChange={onNameChange}
                    type="text"
                    name="name"
                    placeholder="your name"
                    ref={newNameElement}
                    value={props.newNameText}
                />
                <textarea
                    onChange={onCommentChange}
                    placeholder="your comment"
                    ref={newCommentElement}
                    value={props.newCommentText} />
                <button className="button add-post" onClick={onAddComment} >Add post</button>
            </div>
            <div className="posts">
                {CommentsElement}
            </div>
        </main>
    );
};

export default Form;