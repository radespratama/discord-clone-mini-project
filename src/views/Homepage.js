import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'features/userSlice';

import SidebarIcon from 'components/SidebarIcon';
import Sidebar from 'components/Sidebar';
import Login from 'components/Login';
import Chat from 'components/Chat';
import { auth } from '../firebase';
import { login, logout } from 'features/userSlice'

export default function Homepage() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            // console.log('user is', authUser);
            if(authUser){
                // The user logged in
                dispatch(login({
                    uid: authUser.uid,
                    photo: authUser.photoURL,
                    email: authUser.email,
                    displayName: authUser.displayName
                }))
            } else {
                // The user logged out
                dispatch(logout())
            }
        })
    }, [dispatch])
    return (
        <main>
            { user ? (
                <>
                    <SidebarIcon />
                    <Sidebar />
                    <Chat />
                </>
           ):(
               <Login />
           )}
        </main>
    )
}
