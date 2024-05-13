import './TopBar.scss'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import PersonIcon from '@mui/icons-material/Person'
import MessageIcon from '@mui/icons-material/Message'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Avatar123 from '~/assets/person/1.jpeg'
import Tooltip from '@mui/material/Tooltip'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import * as React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import ModeSelect from '../modeSelect/modeSelect'

function TopBar() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">daim</span>
      </div>
      <div className="topbarCenter">
        <div style={{}} className="searchBar">
          <SearchIcon sx={{ fontSize: '20px', opacity: '0.5', marginLeft: '10px' }} />
          <input placeholder="Search" className="searchInput " />
        </div>

        <ModeSelect />
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topBarLink">HomePage</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <Badge badgeContent={4} color="secondary" sx={{ '.MuiBadge-badge': { bgcolor: 'red', color: 'white' } }}>
            <PersonIcon sx={{ color: 'white' }} />
          </Badge>
          <Badge badgeContent={1} color="secondary" sx={{ '.MuiBadge-badge': { bgcolor: 'red', color: 'white' } }}>
            <MessageIcon sx={{ color: 'white' }} />
          </Badge>
          <Badge badgeContent={0} color="secondary" sx={{ '.MuiBadge-badge': { bgcolor: 'red', color: 'white' } }}>
            <NotificationsIcon sx={{ color: 'white' }} />
          </Badge>
        </div>
        <div className="avatar">
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar alt="Remy Sharp" src={Avatar123} />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1
                },
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0
                }
              }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default TopBar
