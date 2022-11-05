import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import userContext from '../context/user/userContext'
import baseUrl from '../database/baseUrl'

function login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const context = useContext(userContext);
    const { user, setUser } = context

    const userLogin = async (e) => {

        console.log(user)
        e.preventDefault()
        console.log(email, password)
        const res = await fetch(`${baseUrl}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const res2 = await res.json()

        if (res2.error) {
            console.log(res2.error)
        }
        else {
            console.log(res2)
            // Cookies.set('token', res2.token)
            // Cookies.set('user', JSON.stringify(res2.user))

            // useEffect(() => {
            localStorage.setItem('token', res2.token);
            localStorage.setItem('user', JSON.stringify(res2.user));
            // }, []);
            setUser('user')
            router.push('/')
        }

    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={userLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                <button type='submit'>Login</button>
            </form>

        </div>
    )
}

export default login