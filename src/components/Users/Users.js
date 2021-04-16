import React from 'react'
import s from './Users.module.css'
import userPhoto from './../../../src/assets/images/userPhoto.png'
import Preloader from '../Common/Preloader/Preloader'
import { NavLink } from 'react-router-dom'
import axios from 'axios'



let Users = (props) => {

    let pages = Math.ceil(props.totalUsersCount / props.usersOnPage)
    let arrPages = []
    for (let i = 1; i <= pages; i++) {
        arrPages.push(i)
    }



    return (
        <div className={s.usersPageWrapper} >
            <div className={s.switchPageButtonsRow}>
                {arrPages.filter(num => props.currentUsersPage >= 7 && num === 1)
                    .map(num =>
                        <div className={s.paginationPrevios}>
                            <div className={props.currentUsersPage === num ? s.paginationItemActive : s.paginationItem} onClick={(e) => { props.onChangePage(num) }}>1</div>
                            <div className={s.paginationSprad}>.....</div>
                        </div>)}
                {arrPages.filter(num => num >= +props.currentUsersPage - 5 && num <= +props.currentUsersPage + 5)
                    .map(num => {
                        return <div className={props.currentUsersPage === num ? s.paginationItemActive : s.paginationItem} onClick={(e) => { props.onChangePage(num) }}>{num}</div>
                    })
                }
                {arrPages.filter(num => num === 1 && props.currentUsersPage <= +arrPages.length - 5)
                    .map(num =>
                        <div className={s.paginationPrevios}>
                            <div className={s.paginationSprad}>.....</div>
                            <div className={props.currentUsersPage === num ? s.paginationItemActive : s.paginationItem} onClick={(e) => { props.onChangePage(arrPages.length) }}>{arrPages.length}</div>
                        </div>)}
            </div>
            {props.state.isFetching ? <Preloader /> :
                props.state.items.map(user => (
                    <div className={s.usersWrapper} key={user.id}>
                        <div className={s.usersLeft}>
                            <div className={s.usersAvatar}>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img src={user.photos.small ? user.photos.small : userPhoto} />
                                </NavLink>
                            </div>
                            <div className={s.usersFollowButton}>
                                <button onClick={() => {
                                    if (!user.followed) {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': '030ecbf1-29d0-474d-af46-18c1b5417bda'
                                                }
                                            })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.toggleFollow(user.id)
                                                }
                                            }
                                            )
                                    }
                                    if (user.followed) {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': '030ecbf1-29d0-474d-af46-18c1b5417bda'
                                                }
                                            })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.toggleFollow(user.id)
                                                }
                                            }
                                            )
                                    }

                                }}>{user.followed ? 'unfollow' : 'follow'}</button>
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
                ))
            }
            <button className={s.bthShowMore}>Show more</button>
        </div >
    )

}




export default Users


