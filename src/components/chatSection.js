import React, { useEffect } from 'react'
import { Link} from "react-router-dom"; 
import {Logout} from './logout';
import {ChatList} from './chatList';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch , useSelector} from 'react-redux';
import {getChats} from '../actions/chatActions.js';

export const ChatSection = () => {
    const { isAuthenticated} = useAuth0();
    const dispatch= useDispatch();
      useEffect(()=>{
        dispatch(getChats());
       
      },[])

  return (
    <div className="chat_section">
      <Link  to="/"> <button className="map_button"></button> </Link>
       {isAuthenticated && (<Logout/>)}
       <ChatList/>
       {/* later on an option to create a chat room will be added here */}
      </div>
  )
}
