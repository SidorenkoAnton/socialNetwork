import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../../src/assets/images/userPhoto.png'


let Users = (props) => {

    let pages = Math.ceil(props.totalUsersCount / props.usersOnPage)
    let arrPages = []
    for (let i = 1; i <= pages; i++) {
        arrPages.push(i)
    }



    return (
        <div className={s.usersPageWrapper} >
            <div className={s.switchPageButtonsRow}>
                {arrPages.filter(num => props.currentUsersPage >= 7 && num == 1)
                    .map(num =>
                        <div className={s.paginationPrevios}>
                            <div className={props.currentUsersPage == num ? s.paginationItemActive : s.paginationItem} onClick={(e) => { props.onChangePage(num) }}>1</div>
                            <div className={s.paginationSprad}>.....</div>
                        </div>)}
                {arrPages.filter(num => num >= +props.currentUsersPage - 5 && num <= +props.currentUsersPage + 5)
                    .map(num => {
                        return <div className={props.currentUsersPage == num ? s.paginationItemActive : s.paginationItem} onClick={(e) => { props.onChangePage(num) }}>{num}</div>
                    })
                }
                {arrPages.filter(num => num == 1 && props.currentUsersPage <= +arrPages.length - 5)
                    .map(num =>
                        <div className={s.paginationPrevios}>
                            <div className={s.paginationSprad}>.....</div>
                            <div className={props.currentUsersPage == num ? s.paginationItemActive : s.paginationItem} onClick={(e) => { props.onChangePage(arrPages.length) }}>{arrPages.length}</div>
                        </div>)}
            </div>
            {
                props.state.items.map(user => (
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
                ))
            }
            <button className={s.bthShowMore}>Show more</button>
        </div >
    )

}




export default Users






/* {arrPages.map(item => {
    if (this.props.currentUsersPage <= 5 && item < 5) {
        return (
            <div className={this.props.currentUsersPage == item ? s.paginationItemActive : s.paginationItem} onClick={(e) => this.onChangePage(e.target.innerHTML)}>{item}</div>
        )
    }
    else if (this.props.currentUsersPage > 5 && item <= this.props.currentUsersPage + 5 && item >= this.props.currentUsersPage - 5) {
        for (let i = this.props.currentUsersPage - 5; i <= this.props.currentUsersPage + 5; i++) {
            return (
                <div className={this.props.currentUsersPage == item ? s.paginationItemActive : s.paginationItem} onClick={(e) => this.onChangePage(e.target.innerHTML)}> {item}</div>
            )
        }
    }
    else if (this.props.currentUsersPage >= pages && item >= pages) {
        return (
            <div >{item}</div>
        )
    }

})} */