import React from 'react'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Discord from 'assets/images/discord.svg';
import { auth, provider } from '../firebase';
import { Button } from '@material-ui/core';

export default function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch(e => toast.warn(`⚠️ ${e.message}`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        }))
    }
    return (
        <>
            <section className="login__container">
                <div className="login__wrapper">
                    <div className="login__logo">
                        <img src={Discord} alt=""/>
                        <h3>Welcome Back!</h3>
                    </div>

                    <div className="logo__button">
                        <Button onClick={signIn}>Sign In</Button>
                    </div>
                </div>
            </section>

            <ToastContainer />
        </>
    )
}
