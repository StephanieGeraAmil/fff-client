import React, { useEffect , useState} from 'react'
import {ChatItem} from './chatItem';
import {ChatPage} from './chatPage';
import {useAuth0 } from "@auth0/auth0-react";
import {useDispatch , useSelector} from 'react-redux';
import {getChats} from '../actions/chatActions.js';
import {clearSelectedChat} from '../actions/globalStateActions.js';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import 'bootstrap/dist/css/bootstrap.min.css'
import {io} from 'socket.io-client';
import {setMessages, addMessage, clearMessages}  from '../actions/messageActions';

export const ChatSection = () => {
    // const { isAuthenticated} = useAuth0();
    const chats=useSelector((state)=>state.chats); 
    const selectedChat=useSelector((state)=>state.current.chat); 
    const [skt, setSkt]= useState({});
    const dispatch= useDispatch();

    useEffect(()=>{
      dispatch(getChats());
      const socket=io(process.env.REACT_APP_BACKEND_URL);
      socket.on("last-100-messgaes-from-chat",(data)=> { dispatch(setMessages(data));});
      socket.on ("new-message",  (message)  =>{ dispatch(addMessage(message)); });

      setSkt(socket);
      
      return()=>{
        socket.disconnect()
        dispatch(clearSelectedChat());
        dispatch(clearMessages());
       }
      
    },[])

  return (<>
              <div className='chat_section'>
                    <Container className='chat_list'>
                          <ListGroup className='mh-100' >
                                {chats.map((item) => {
                                    return (
                                        <ListGroupItem  key={item._id}>
                                            <ChatItem  className='chat_list_item' key={item._id} chat={item} socket={skt}/>
                                        </ListGroupItem>
                                    )
                                })}
                            </ListGroup>
                      </Container>
                      <div className='chatView'>
                          {selectedChat&&<ChatPage socket={skt}/>}
                    </div>
                  {/* later on an option to create a chat room will be added here */}
               </div>
          </>
  )
}
