import React, { useEffect } from 'react'
import {Link} from "react-router-dom"; 
import {Logout} from './logout';
import {ChatItem} from './chatItem';
import {useAuth0 } from "@auth0/auth0-react";
import {useDispatch , useSelector} from 'react-redux';
import {getChats} from '../actions/chatActions.js';

export const ChatSection = () => {
    const { isAuthenticated} = useAuth0();
    const chats=useSelector((state)=>state.chats); 
    const dispatch= useDispatch();
    useEffect(()=>{
      dispatch(getChats());
      
    },[])

  return (
    <div className="chat_section">
      <Link  to="/"> <button className="map_button"></button> </Link>
       {isAuthenticated && (<Logout/>)}
       <ul className='chat_list'>
            {chats.map((item) => {
                return (
                    <li key={item._id}>
                        <ChatItem key={item._id} chat={item}/>
                        
                    </li>
                )
            })}
        </ul>
     
       {/* later on an option to create a chat room will be added here */}
      </div>
  )
}
