import SideBarListItem from '../SideBarListItem/SideBarListItem'
import './SideBar.scss'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import RssFeedIcon from '@mui/icons-material/RssFeed'
import ChatIcon from '@mui/icons-material/Chat'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo'
import GroupIcon from '@mui/icons-material/Group'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import HelpIcon from '@mui/icons-material/Help'
import WorkIcon from '@mui/icons-material/Work'
import EventIcon from '@mui/icons-material/Event'
import SchoolIcon from '@mui/icons-material/School'
import Divider from '@mui/material/Divider'
import { Users } from '~/mockData/mockData'

import CloseFriend from '~/components/CloseFriend/CloseFriend'

function SideBar() {
  const list = [
    {
      text: 'Feed',
      icon: RssFeedIcon
    },
    {
      text: 'Chats',
      icon: ChatIcon
    },
    {
      text: 'Videos',
      icon: SlowMotionVideoIcon
    },
    {
      text: 'Groups',
      icon: GroupIcon
    },
    {
      text: 'Bookmarks',
      icon: BookmarkIcon
    },
    {
      text: 'Questions',
      icon: HelpIcon
    },
    {
      text: 'Jobs',
      icon: WorkIcon
    },
    {
      text: 'Event',
      icon: EventIcon
    },
    {
      text: 'Courses',
      icon: SchoolIcon
    }
  ]
  const details = Users.map((u) => u.profilePicture)
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <SideBarListItem items={list} />
        <Divider
          sx={{
            '&.MuiDivider-root': { borderWidth: '1px' },
            color: '#fff',
            marginBottom: '15px'
          }}
        />
        <ul className="sidebarfriendlist">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} details={details} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar
