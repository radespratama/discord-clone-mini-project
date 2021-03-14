import React from 'react'

import Sidebar from 'components/Sidebar';
import SidebarIcon from 'components/SidebarIcon';
import Chat from 'components/Chat';

export default function Homepage() {
    return (
        <main>
            <SidebarIcon />
            <Sidebar />
            <Chat />
        </main>
    )
}
