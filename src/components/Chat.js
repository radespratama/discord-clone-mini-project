import React, { useState, useEffect } from 'react'

import { selectChannelId, selectChannelName } from 'features/appSlice';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import GifIcon from '@material-ui/icons/Gif';

import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme as ThemeColor } from 'assets/js/style';
import Tooltip from '@material-ui/core/Tooltip';

import { selectUser } from 'features/userSlice';
import ChatHeader from 'components/ChatHeader'
import { useSelector } from 'react-redux';
import Message from 'components/Message'
import firebase from 'firebase';
import db from '../firebase';

export default function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const iconInput = [
        {
            id: "126",
            name: "Upgrade your friends! Gift them awesome chat perks with Nitro.",
            icon: <CardGiftcardIcon/>
        },
        {
            id: "126",
            name: "Gif",
            icon: <GifIcon/>
        },
        {
            id: "126",
            name: "Emoticon",
            icon: <EmojiEmotionsIcon/>
        }
    ]

    useEffect(() => {
        if(channelId) {
            db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map((doc) => doc.data()))
            ));
        }
    }, [channelId])

    const sendMessage = e => {
        e.preventDefault()

        db.collection('channels').doc(channelId).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        });

        setInput("");
    }
    return (
        <>
            <div className="chat__container">
                <ChatHeader channelName={channelName} />

                <div className="chat__messages">
                    {messages.map((message) => (
                        <Message
                            key={message}
                            timestamp={message.timestamp}
                            message={message.message}
                            user={message.user}
                        />
                    ))}
                </div>
                <div className="chat__input">
                    <AddCircleIcon fontSize="large" />
                    <form>
                        <input
                            disabled={!channelId}
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            type="text"
                            placeholder={`Message #${channelName}`}
                        />
                        <button onClick={sendMessage} disabled={!channelId} className="chat__inputButton" type="submit">Send Message</button>
                    </form>

                    <div className="chat__inputIcons">
                        <MuiThemeProvider theme={ThemeColor}>
                            {
                                iconInput.map((item, index) => {
                                    return <Tooltip key={`${index}-${item.id}`} title={item.name} placement="top">
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
