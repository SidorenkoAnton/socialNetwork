import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../../src/assets/images/userPhoto.png'

const Users = (props) => {


    if (props.state.items.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            }
            )
    }


    return (
        <div>
            {props.state.items.map(user => (
                <div className={s.usersWrapper}>
                    <div className={s.usersLeft}>
                        <div className={s.usersAvatar}>
                            <img src={user.photos.small ? user.photos.small : userPhoto} />
                        </div>
                        <div className={s.usersFollowButton}>
                            <button onClick={() => props.toggleFollow(user.id)}>{user.followed ? 'unfollow' : 'follow'}</button>
                        </div>
                    </div>
                    <div className={s.usersRight}>
                        <div className={s.usersInformation}>
                            <div className={s.usersName}>
                                <div className={s.usersFirstName}>{user.name}</div>
                                <div className={s.usersSecondName}>{user.secondName}</div>
                            </div>
                            <div className={s.usersStatus}>{user.status}</div>
                        </div>
                        <div className={s.usersLocation}>
                            <div className={s.usersCountry}>{'user.location.country'}</div>
                            <div className={s.usersSity}>{'user.location.sity'}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )






}

export default Users