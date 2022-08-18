import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings  } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">TechAdmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />          
                </div>
                <img src="https://cdn.pixabay.com/photo/2018/05/28/09/32/technology-3435575_960_720.jpg" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
