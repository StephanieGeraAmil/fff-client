import React ,{useEffect, useState}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {Message} from './message';
import {createMessage, getMessages} from '../actions/messageActions';
import{ useParams} from 'react-router-dom';


export const ChatPage = () => {
   const { id } = useParams();
  
  const dispatch=useDispatch();
  const messagesOfChat = useSelector((state)=>state.messages)
  const currentUser = useSelector((state)=>state.current.user)
  const [msg, setMsg]= useState("")
  const handleKeyPress=(e)=>{
    if(e.key === 'Enter'){
      console.log('enter')
      handleSubmit();
     }
 
   
  }
  const handleSubmit=()=>{
    console.log('submit');
  
    dispatch(createMessage({  sender:currentUser,
                              content:msg,
                              chat:id}));   
  }
  useEffect(()=>{
      dispatch(getMessages(id));
  },[])

  //***** */ I have to clean the state. messages when I close the chat page

  
  return (
    <div className='chat_page'>
          <div className='message_list'>

             <ul>
                {messagesOfChat.map((item) => {
                    return (
                        <li key={item._id}>
                            <Message key={item._id} message={item} />
                        </li>
                    )
                })}
             </ul>
           
          </div>
                
          <input  type="text"
              required
              className="form-control"
              value={msg}
              onChange={(e)=>setMsg(e.target.value)}
              onKeyPress={(e)=>handleKeyPress(e)}
              />
          <button onClick={()=>handleSubmit()}>
            Send
          </button>
            
          
    </div>
  )
}
