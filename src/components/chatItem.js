import React from 'react'
import {useDispatch } from 'react-redux';
import {setSelectedChat} from '../actions/globalStateActions.js';
import {clearMessages}  from '../actions/messageActions';
import Container from 'react-bootstrap/Container';



export const ChatItem = ({chat,socket}) => {
  
  const dispatch= useDispatch();

  const onChatChange=(chat)=>{
    dispatch(clearMessages());
    dispatch(setSelectedChat(chat));
    socket.emit("get-last-100-messages",chat._id);
  
     
  }
  return (
      <Container onClick={()=>{onChatChange(chat)}}> 
            <h4>{chat.title}</h4>
      </Container>
  )
}
