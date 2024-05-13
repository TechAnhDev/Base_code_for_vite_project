import './Online.scss'
import Avatar7 from '~/assets/person/3.jpeg'

export default function Online({ user }) {
  return (
    <>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img className="rightbarProfileImg" src={Avatar7} alt="" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
      </li>
    </>
  )
}
