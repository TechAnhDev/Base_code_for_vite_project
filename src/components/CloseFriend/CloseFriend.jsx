import './CloseFriend.scss'
import Avatar1 from '~/assets/person/1.jpeg'

export default function CloseFriend({ user, details }) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={Avatar1} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
