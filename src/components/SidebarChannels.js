import React from 'react'
import { useDispatch } from 'react-redux';
import { setChannelInfo } from 'features/appSlice';

import { MuiThemeProvider } from '@material-ui/core/styles'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { theme as ThemeColor } from 'assets/js/style';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';


export default function SidebarChannels({ id, channelName }) {
    const dispatch = useDispatch()
    return (
        <div className="sidebarChannel" onClick={() => dispatch(setChannelInfo({
            channelId: id,
            channelName: channelName
        }))}>
            <h4>
                <span className="sidebarChannel__hash">#</span> {channelName}
                <MuiThemeProvider theme={ThemeColor}>
                    <Tooltip title="Add Friend" placement="top" TransitionComponent={Zoom}>
                        <PersonAddIcon />
                    </Tooltip>
                </MuiThemeProvider>
            </h4>
            
        </div>
    )
}
