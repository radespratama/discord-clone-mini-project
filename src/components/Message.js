import React from 'react'
import { Avatar } from '@material-ui/core'

export default function Message({ timestamp, message, user }) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }
    return (
        <div className="message__container">
            <Avatar src={user.photo} />
            <div className="message__info">
                <h4>
                    {user.displayName}
                    <span className="message__timestamp">{new Date(timestamp?.toDate()).toLocaleString('en-US', options)}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}
