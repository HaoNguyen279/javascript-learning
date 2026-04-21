import React from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import userAtom from '../states/userAtom'

export default function UserProfileComponent() {
    const user = useRecoilValue(userAtom);
    const [userState, setUser] = useRecoilState(userAtom);
    const reset = useResetRecoilState(userAtom);
    const handleLogin = ()=>{
        setUser({...user, status : true, userName : "Hao Nguyen" })
        console.log("Logged in");
        
    }
    const handleLogout = ()=>{
        reset();
        console.log("Logged out");
    }
  return (
    <div>
        {user.status ? "Helloo " + user.userName : <><div>Chua login</div><button onClick={handleLogin}>Login</button></>}
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
