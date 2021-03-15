import React, { useState, useEffect } from 'react'
import db, { auth } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from 'features/userSlice';

import MicIcon from '@material-ui/icons/Mic';
import AddIcon from '@material-ui/icons/Add';
import CallIcon from '@material-ui/icons/Call';
import SettingsIcon from '@material-ui/icons/Settings';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';

import { MuiThemeProvider } from '@material-ui/core/styles'
import SidebarChannel from 'components/SidebarChannels';
import { theme as ThemeColor } from 'assets/js/style';
import Tooltip from '@material-ui/core/Tooltip';
import { Avatar } from '@material-ui/core';


export default function Sidebar() {
    const user = useSelector(selectUser)
    const [channels, setChannels] = useState([])

    useEffect(() => {
        db.collection('channels').onSnapshot((snapshot) => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data()
            })))
        ))
    }, [])

    const handleAddChannels = () => {
        const channelName = prompt('Enter a new channel name');
        if(channelName){
            db.collection('channels').add({
                channelName: channelName,
            });
        }
    }
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
        <>
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
                        <AddIcon onClick={handleAddChannels} className="sidebar__addChannel" />
                    </div>
                    <div className="sidebar__channelList">
                        {channels.map(({id, channel}) => (
                            <SidebarChannel key={id} id={id} channelName={channel.channelName} />
                        ))}
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
                    <Avatar onClick={() => auth.signOut()} src={user.photo} />
                    <div className="sidebar__profileInfo">
                        <h3>{user.displayName}</h3>
                        <p>#{user.uid.substring(0, 5)}</p>
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
        </>
    )
}
