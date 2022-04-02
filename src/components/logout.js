import React, {useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
// import {useDispatch} from 'react-redux';
// import { unsetChats } from '../actions/chatActions';

export const Logout = () => {
    // const dispatch= useDispatch();
    const { logout } = useAuth0();
    // useEffect(()=>{
    //     dispatch(unsetChats());   
    // },[])
    
    return <button className="top_link logout_button"  onClick={() => logout({ returnTo: window.location.origin })}></button>
}
