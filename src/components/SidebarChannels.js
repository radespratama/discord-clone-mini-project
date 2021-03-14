import React from 'react'

import { MuiThemeProvider } from '@material-ui/core/styles'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

import { theme as ThemeColor } from 'assets/js/style';

export default function SidebarChannels({ id, channel }) {
    return (
        <div className="sidebarChannel">
            <h4>
                <span className="sidebarChannel__hash">#</span> Channel Name
                <MuiThemeProvider theme={ThemeColor}>
                    <Tooltip title="Add Friend" placement="top" TransitionComponent={Zoom}>
                        <PersonAddIcon />
                    </Tooltip>
                </MuiThemeProvider>
            </h4>
            
        </div>
    )
}
