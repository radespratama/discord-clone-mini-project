import React from 'react'

import { ReactComponent as Discord } from 'assets/images/discord.svg';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme as ThemeColor } from 'assets/js/style';
import Tooltip from '@material-ui/core/Tooltip';

export default function Sidebar() {
    return (
        <>
            <div className="sidebar__server">
                <div className="sidebar__list__icon">
                    <MuiThemeProvider theme={ThemeColor}>
                        <Tooltip title="Home" placement="right">
                            <Discord />
                        </Tooltip>
                    </MuiThemeProvider>
                </div>
            </div>
        </>
    )
}
