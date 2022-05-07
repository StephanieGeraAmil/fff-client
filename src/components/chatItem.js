import React from 'react'
import {useDispatch } from 'react-redux';
import {setSelectedChat} from '../actions/globalStateActions.js';
import {clearMessages}  from '../actions/messageActions';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'



export const ChatItem = ({chat,socket}) => {
  
  const dispatch= useDispatch();

  const onChatChange=(chat)=>{
    dispatch(clearMessages());
    dispatch(setSelectedChat(chat));
    socket.emit("get-last-100-messages",chat._id);
  
     
  }
  return (
      <Container onClick={()=>{onChatChange(chat)}}className="d-flex flex-row"> 
            <Image thumbnail={true}  roundedCircle={true} src={chat.img}  style={{maxWidth: '30px',maxHeight: '30px'}}/>
            <h4 className="m-2 gray_font">{chat.title}</h4>
      </Container>
  )
}
