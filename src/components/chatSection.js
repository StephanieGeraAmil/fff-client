import React, { useEffect } from 'react'
import {ChatItem} from './chatItem';
import {ChatPage} from './chatPage';
import {useAuth0 } from "@auth0/auth0-react";
import {useDispatch , useSelector} from 'react-redux';
import {getChats} from '../actions/chatActions.js';


export const ChatSection = () => {
    const { isAuthenticated} = useAuth0();
    const chats=useSelector((state)=>state.chats); 
    const selectedChat=useSelector((state)=>state.current.chat); 
    const dispatch= useDispatch();
    useEffect(()=>{
      dispatch(getChats());
      
    },[])

  return (
    <div className="chat_section">
       <ul className='chat_list'>
            {chats.map((item) => {
                return (
                    <li key={item._id}>
                        <ChatItem key={item._id} chat={item}/>
                    </li>
                )
            })}
        </ul>
        <div className='chatView'>
          {selectedChat&&<ChatPage selected_chat={selectedChat}/>}
        </div>
     
       {/* later on an option to create a chat room will be added here */}
      </div>
  )
}
