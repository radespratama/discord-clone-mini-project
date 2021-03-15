import React from 'react'

import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme as ThemeColor } from 'assets/js/style';
import Tooltip from '@material-ui/core/Tooltip';

import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import SearchRounded from '@material-ui/icons/SearchRounded';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import HelpIcon from '@material-ui/icons/Help';

export default function ChatHeader({ channelName }) {
    const listIcon = [
        {
            id: "123",
            name: "Muting a channel prevents unread indicators and notifications from appearing unless you are mentioned.",
            icon: <NotificationsIcon/>
        },
        {
            id: "124",
            name: "Pinned Messages",
            icon: <EditLocationIcon/>
        },
        {
            id: "125",
            name: "Member List",
            icon: <PeopleAltIcon/>
        }
    ]
    const listIconTwo = [
        {
            id: "126",
            name: "Inbox",
            icon: <AllInboxIcon/>
        },
        {
            id: "127",
            name: "If you want to Logout, You can click avatar icon in bottom left. **you can make new styling for logout.**",
            icon: <HelpIcon/>
        }
    ]
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash"># </span>
                    {channelName}
                </h3>
            </div>
            <div className="chatHeader__right">
                <MuiThemeProvider theme={ThemeColor}>
                    {
                        listIcon.map((item, index) => {
                            return <Tooltip key={`${index}-${item.id}`} title={item.name} placement="bottom">
                                {item.icon}
                             </Tooltip>
                        })
                    }
                </MuiThemeProvider>

                <div className="chatHeader__search">
                    <input placeholder="Search"/>
                    <SearchRounded />
                </div>
                <MuiThemeProvider theme={ThemeColor}>
                    {
                        listIconTwo.map((item, index) => {
                            return <Tooltip key={`${index}-${item.id}`} title={item.name} placement="bottom">
                                {item.icon}
                             </Tooltip>
                        })
                    }
                </MuiThemeProvider>
            </div>
        </div>
    )
}
