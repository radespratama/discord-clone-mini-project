import React from 'react'

import SidebarChannel from 'components/SidebarChannels';

import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import SettingsIcon from '@material-ui/icons/Settings';
import CallIcon from '@material-ui/icons/Call';
import MicIcon from '@material-ui/icons/Mic';
import AddIcon from '@material-ui/icons/Add';

import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme as ThemeColor } from 'assets/js/style';
import Tooltip from '@material-ui/core/Tooltip';
import { Avatar } from '@material-ui/core';

export default function Sidebar() {

    const iconProfile = [
        {
            id: "01-001",
            name: "Mic Icon",
            desc: "Mute",
            icon: <MicIcon />
        },
        {
            id: "01-002",
            name: "Headset Icon",
            desc: "Deafen",
            icon: <HeadsetMicIcon />
        },
        {
            id: "01-003",
            name: "Setting Icon",
            desc: "User Settings",
            icon: <SettingsIcon />
        }
    ]

    return (
        <div className="sidebar__container">
            <div className="sidebar__top">
                <h3>Tempat Nongkrong!</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Chat Room</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel" />
                </div>
                <div className="sidebar__channelList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large" />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Streaming</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoOutlined />
                    <CallIcon />
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar />
                <div className="sidebar__profileInfo">
                    <h3>Rades Pratama</h3>
                    <span>#8342</span>
                </div>
                <div className="sidebar__profileIcons">
                    <MuiThemeProvider theme={ThemeColor}>
                        {
                            iconProfile.map((item, index) => {
                                return <Tooltip key={`${index}-${item.id}`} title={item.desc} placement="top">
                                    {item.icon}
                                </Tooltip>
                            })
                        }
                    </MuiThemeProvider>
                </div>
            </div>

        </div>
    )
}
