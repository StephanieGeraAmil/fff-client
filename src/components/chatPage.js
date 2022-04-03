import React ,{useEffect, useState}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {Message} from './message';
import {createMessage, getMessages, clearMessages} from '../actions/messageActions';
import{ useParams} from 'react-router-dom';


export const ChatPage = () => {
   const { id } = useParams();
  
  const dispatch=useDispatch();
  const chats= useSelector((state)=>state.chats)
  const chat =chats.find(element=>element._id==id);
  const messagesOfChat = useSelector((state)=>state.messages)
  const currentUser = useSelector((state)=>state.current.user)
  const [msg, setMsg]= useState("")
  const handleKeyPress=(e)=>{
    if(e.key === 'Enter'){
      handleSubmit();
     }  
  }
  const handleSubmit=()=>{
    dispatch(createMessage({  sender:currentUser,
                              content:msg,
                              chat:id}));  
    setMsg(""); 
  }
  useEffect(()=>{
   
      dispatch(getMessages(id));
      return () => {
          dispatch(clearMessages());
        }
  },[])
  
  return (
    <div className='chat_page'>
          <h4>{chat.title}</h4>
          <ul>
            {messagesOfChat.map((item) => {
                return (
                    <li  key={item._id}>
                        <Message key={item._id} message={item} />
                    </li>
                )
            })}
          </ul>  
          <div className='writing_zone'>   
              <input  type="text"
                  required
                  className="form-control"
                  value={msg}
                  onChange={(e)=>setMsg(e.target.value)}
                  onKeyPress={(e)=>handleKeyPress(e)}
                  />
              <button className="send_button" onClick={()=>handleSubmit()}></button>
          </div>        
    </div>
  )
}
