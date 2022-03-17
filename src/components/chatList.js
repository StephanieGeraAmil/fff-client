import React from 'react'
import {ChatItem} from './chatItem';
import{useSelector} from 'react-redux';

export const ChatList = () => {
   const chats=useSelector((state)=>state.chats); 
  return (
    <div className='chat_list'>
              <ul>
                {chats.map((item) => {
                    return (
                        <li key={item._id}>
                           <ChatItem key={item._id} chat={item}/>
                           
                        </li>
                    )
                })}
             </ul>
     
    </div>








  )
}
