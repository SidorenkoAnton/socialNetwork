
import { connect } from 'react-redux'
import { addPost } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'


const mapStateToProps = (state) => {

    return {
        state: state.profilePage,
        newPostText: state.profilePage.newPostText
    }
}

/* const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (newText) => {
            let action = updateNewPostTextActionCreator(newText)
            dispatch(action)
        }
    }
} */

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts)

export default MyPostsContainer;

