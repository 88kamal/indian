import UserContext from "./userContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const UserState = (props) => {
    const router = useRouter();
    const [user, setUser] = useState('');

    useEffect(() => {
        setUser(typeof window !== 'undefined' ? localStorage.getItem('token') : null);

    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        // router.reload()
        setUser()
        router.push('/login')
    }

    return (
        <UserContext.Provider value={{ user, logout, setUser }}>
            {props.children}
        </UserContext.Provider>
    )

}
export default UserState;