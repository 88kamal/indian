import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import userContext from '../context/user/userContext';

function Navbar() {
    const context = useContext(userContext);
    const { user, logout } = context
    console.log(user)
    // const router = useRouter();
    // const [user, setUser] = useState(undefined);

    // useEffect(() => {
    //     setUser(typeof window !== 'undefined' ? localStorage.getItem('token') : null);

    // }, []);
    // const logout = () => {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('user');
    //     // router.reload()
    //     setUser()
    //     router.push('/login')
    // }
    return (
        <div style={{ background: 'red', color: 'white' }}>
            <ul style={{ display: 'flex', justifyContent: 'center' }}>
                <li style={{
                    padding: '12px', listStyle: 'none'
                }}><Link href={'/'}>Home</Link></li>

                {/* {user && <li style={{
                    padding: '12px', listStyle: 'none'
                }}><a onClick={logout}>Logout</a></li>} */}

                {user ?
                    <>
                        <li style={{
                            padding: '12px', listStyle: 'none'
                        }}><a onClick={logout}>Logout</a></li>
                        <li style={{
                            padding: '12px', listStyle: 'none'
                        }}><Link href={'/'}>Create</Link></li>
                    </>
                    :
                    <>
                        <li style={{
                            padding: '12px', listStyle: 'none'
                        }}><Link href={'/signup'}>Signup</Link></li>
                        <li style={{
                            padding: '12px', listStyle: 'none'
                        }}><Link href={'/login'}>Login</Link></li>
                    </>}


            </ul>
        </div>
    )
}

export default Navbar