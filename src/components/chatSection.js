import React, { useEffect } from 'react'
import {ChatItem} from './chatItem';
import {ChatPage} from './chatPage';
import {useAuth0 } from "@auth0/auth0-react";
import {useDispatch , useSelector} from 'react-redux';
import {getChats} from '../actions/chatActions.js';
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
      
    },[])

  return (
    <Container>
      <Row>
          <Col>
                <ListGroup >
                      {chats.map((item) => {
                          return (
                              <ListGroupItem  key={item._id}>
                                  <ChatItem key={item._id} chat={item}/>
                              </ListGroupItem>
                          )
                      })}
                  </ListGroup>
            </Col>
            <Col>
                  {selectedChat&&<ChatPage selected_chat={selectedChat}/>}
            </Col>
        </Row>
     
       {/* later on an option to create a chat room will be added here */}
      </Container>
  )
}
