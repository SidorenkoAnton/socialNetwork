
import { connect, ConnectedProps } from 'react-redux'
import { addPost } from '../../../redux/profile-reducer'
import { AppStateType } from '../../../redux/redux-store'
import { InitialStatePostsType } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

type MapStateToPropsType = {
    posts: Array<InitialStatePostsType>
    newPostText: string
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const connector = connect(mapStateToProps, { addPost })
export type PropsFromReduxType = ConnectedProps<typeof connector>

const MyPostsContainer = connector(MyPosts)

export default MyPostsContainer;

