import { useRouter } from 'next/router'
import React, { useState } from 'react'
import baseUrl from '../database/baseUrl'

function signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const userSignup = async (e) => {
        e.preventDefault()

        const res = await fetch(`${baseUrl}/api/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
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

        }
    }
    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={userSignup}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                <button type='submit'>Signup</button>
            </form>

        </div>
    )
}

export default signup