import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
 state = {
  users: [
   {
    id: '1',
    login: "Salochin5",
    avatar_url: "https://avatars.githubusercontent.com/u/54277598?v=4",
    html_url: "https://github.com/Salochin5",
   },
   {
    id: '2',
    login: "mojombo",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
   },
   {
    id: '3',
    login: "defunkt",
    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
    html_url: "https://github.com/defunkt",
   },
  ]
 }

 render() {
  return (
   <div style={userStyle}>
    {this.state.users.map(user => (
     <UserItem key={user.id} user={user} />
    ))}
   </div>
  )
 }
}

const userStyle = {
 display: 'grid',
 gridTemplateColumns: 'repeat(3, 1fr)',
 gridGap: '1rem'
}

export default Users
