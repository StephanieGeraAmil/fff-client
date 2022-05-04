import React, { useEffect } from 'react'
import {ChatItem} from './chatItem';
import {ChatPage} from './chatPage';
import {useAuth0 } from "@auth0/auth0-react";
import {useDispatch , useSelector} from 'react-redux';
import {getChats} from '../actions/chatActions.js';
import {clearSelectedChat} from '../actions/globalStateActions.js';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import 'bootstrap/dist/css/bootstrap.min.css'


export const ChatSection = () => {
    const { isAuthenticated} = useAuth0();
    const chats=useSelector((state)=>state.chats); 
    const selectedChat=useSelector((state)=>state.current.chat); 
    const dispatch= useDispatch();
    useEffect(()=>{
      dispatch(getChats());
      return()=>{
      
        dispatch(clearSelectedChat());
       }
      
    },[])

  return (<>
   {/* <div className='auxdiv'>

   </div> */}
   <div className='chat_section'>
        <Container className='chat_list'>
              <ListGroup className='mh-100' >
                    {chats.map((item) => {
                        return (
                            <ListGroupItem  key={item._id}>
                                <ChatItem key={item._id} chat={item}/>
                            </ListGroupItem>
                        )
                    })}
                </ListGroup>
          </Container>
          <div className='chatView'>
              {selectedChat&&<ChatPage selected_chat={selectedChat}/>}
        </div>
     
     
       {/* later on an option to create a chat room will be added here */}
      </div>
      </>
  )
}
