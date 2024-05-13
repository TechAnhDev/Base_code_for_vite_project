import './RightBarFollowing.scss'
import Img1 from '~/assets/person/8.jpeg'

function RightBarFollowing() {
  return (
    <div className="rightbarFollowing">
      <img src={Img1} alt="" className="rightbarFollowingImg" />
      <span className="rightbarFollowingName">John Carter</span>
    </div>
  )
}

export default RightBarFollowing
