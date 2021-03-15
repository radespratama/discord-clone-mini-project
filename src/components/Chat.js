import React from 'react'

import AddCircleIcon from '@material-ui/icons/AddCircle';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';

import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme as ThemeColor } from 'assets/js/style';
import Tooltip from '@material-ui/core/Tooltip';

import ChatHeader from 'components/ChatHeader'
import Message from 'components/Message'
export default function Chat() {
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
    return (
        <>
            <div className="chat__container">
                <ChatHeader />

                <div className="chat__messages">
                    <Message />
                </div>
                <div className="chat__input">
                    <AddCircleIcon fontSize="large" />
                    <form>
                        <input type="text" placeholder={`Message #TestChannel`}/>
                        <button className="chat__inputButton" type="submit">Send Message</button>
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
