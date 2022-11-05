import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

function Layout(props) {
//   const [user, setUser] = useState('');

//   useEffect(() => {
//       setUser(typeof window !== 'undefined' ? localStorage.getItem('token') : null);
// // setUser()
//   }, []);
  return (
    <div>
        <Navbar />
        <div className="content">
            {props.children}
        </div>
    </div>
  )
}

export default Layout