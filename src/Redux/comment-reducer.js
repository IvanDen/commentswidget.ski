const ADD_COMMENT = 'ADD-COMMENT';
const DELETE_COMMENT = 'DELETE-COMMENT';
const UPDATE_NAME_TEXT = 'UPDATE-NAME-TEXT';
const UPDATE_COMMENT_TEXT = 'UPDATE-COMMENT-TEXT';

let initialState = {
    comments: [
        {id: '5695', name: 'Ivan', message: 'Hi, how are you?', date: '2019-8-9 09:20:15'},
        {id: '5345', name: 'Lilian', message: 'Hi!', date: '2019-6-9 102:20:10'},
    ],
    newNameText: 'your name!',
    newCommentText: 'your text!',
    newDate: ''
};
const commentsReducer = (state = initialState, action) => {

    let calculatDate = () => {
        let dateTime;
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return dateTime = date+' '+time;
    };

    switch (action.type) {
        case ADD_COMMENT: {
            let newComment = {
                newNameText: '',
                newCommentText: '',
                id: Math.random()*10000000000000000,
                name: state.newNameText,
                message: state.newCommentText,
                date: calculatDate(),
            };
            return {
                ...state,
                comments: [...state.comments, newComment]
            };
        }
        case UPDATE_NAME_TEXT: {
            return{
                ...state,
                newNameText: action.bodyNameText,
            }
        }
        case UPDATE_COMMENT_TEXT: {
            return{
                ...state,
                newCommentText: action.bodyCommentText,
            }
        }
        case DELETE_COMMENT: {

            return {comments: state.comments.filter(comments => comments.id !== action.index)}
        }
        default:
            return state;
    }
};

export const addCommentAC = () => ({type: ADD_COMMENT});
export const updateNameTextAC = (textName) =>
    ({
        type: UPDATE_NAME_TEXT,
        bodyNameText: textName,
    });
export const updateCommentTextAC = (commentText) =>
    ({
        type: UPDATE_COMMENT_TEXT,
        bodyCommentText: commentText,
    });
export const removeCommentAC = (index) => ({
    type: DELETE_COMMENT,
    index: index,
});

export default commentsReducer;
