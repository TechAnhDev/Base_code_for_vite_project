import './RightBar.scss'
import Img1 from '~/assets/person/8.jpeg'
import { Users } from '~/mockData/mockData'
import Online from '~/components/Online/Online'
import Birthday from '~/assets/gift.png'
import Ad from '~/assets/ad.png'
import { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import AvaterMessage from '~/assets/person/1.jpeg'
import SearchIcon from '@mui/icons-material/Search'
import SendIcon from '@mui/icons-material/Send'

export default function Rightbar({ profile }) {
  const [isMessage, setIsMessage] = useState(false)

  const Message = () => {
    return (
      <div className="message">
        <div className="top_message">
          <Avatar
            alt="Remy Sharp"
            src={AvaterMessage}
            sx={{
              marginRight: '20px'
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px'
            }}
          >
            <h4>Luận bẩn</h4>
            <p style={{ fontSize: 'small' }}>Đang hoạt động</p>
          </div>
          <CloseIcon
            sx={{
              color: '#fff',
              position: 'absolute',
              right: '8px',
              cursor: 'pointer'
            }}
            onClick={handleMessage}
          />
        </div>
        <div className="content_message">content</div>
        <div className="footer_message">
          <div style={{}} className="searchBar">
            <SearchIcon sx={{ fontSize: '20px', opacity: '0.5', marginLeft: '10px' }} />
            <input placeholder="Search" className="searchInput " />
          </div>
          <SendIcon sx={{ transition: 'all 0.4s', cursor: 'pointer', color: 'white', '&:hover': { color: 'red' } }} />
        </div>
      </div>
    )
  }
  const handleMessage = () => {
    setIsMessage(!isMessage)
  }
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src={Birthday} alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src={Ad} alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <div key={u.id} onClick={handleMessage}>
              <Online user={u} />
            </div>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={Img1} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={Img1} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={Img1} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={Img1} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={Img1} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={Img1} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">{profile ? <ProfileRightbar /> : <HomeRightbar />}</div>
      {isMessage && <Message />}
    </div>
  )
}
