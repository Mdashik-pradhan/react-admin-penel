import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="top-left">
                    <span className="logo">lamaadimn</span>
                </div>
                <div className="top-right">
                    <div className="topBarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topBarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topBarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4KPkcmyIt8zCjU9Fp6jU0oWK1EjaWRv5XloZbR2NsYp_X7uSRX9HQEnvOEvMCyZvDuw&usqp=CAU" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
