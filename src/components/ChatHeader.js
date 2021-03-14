import React from 'react'

import NotificationsIcon from '@material-ui/icons/Notifications';
export default function ChatHeader() {
    return (
        <div className="chatHeader">
            <h3>Im Header</h3>
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash"># </span> Channel Name
                </h3>
            </div>
            <div className="chatHeader__right">

            </div>
        </div>
    )
}
