import React ,{useEffect, useState}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {Message} from './message';
import {setMessages, addMessage, clearMessages}  from '../actions/messageActions';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Stack from 'react-bootstrap/Stack';

import Form from 'react-bootstrap/Form';

import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import 'bootstrap/dist/css/bootstrap.min.css'

import {io} from 'socket.io-client';


export const ChatPage = ({selected_chat}) => {
  const id=selected_chat._id;
  const dispatch=useDispatch();

  const messagesOfChat = useSelector((state)=>state.messages)
  const currentUser = useSelector((state)=>state.current.user)
  const [loaded, setLoaded]= useState(false)
  const [msg, setMsg]= useState("")
  const [skt, setSkt]= useState({})

  const handleKeyPress=(e)=>{
    if(e.key === 'Enter'){
       handleSubmit(e)
     }  
     
  }
  const handleSubmit=(e)=>{
     e.preventDefault();
    skt.emit("message-sent", {   sender:currentUser,
                                  content:msg},
                                  id);
    setMsg(""); 
    console.log("messaged emmited")
    console.log(skt)

  }
  useEffect(()=>{

      const socket=io(process.env.REACT_APP_BACKEND_URL);
      setSkt(socket);
    
      socket.on("connect",()=>{ socket.emit("get-last-100-messages",id); }); 
      socket.on("last-100-messgaes-from-chat",(data)=> { dispatch(setMessages(data))});
      socket.on ("new-message",  (message)  =>{ dispatch(addMessage(message)); });
     
      
      return()=>{
        socket.disconnect()
        setSkt({});
        dispatch(clearMessages());
       }
      
  },[])

  useEffect(()=>{
    setLoaded(true);
  },[messagesOfChat])
  
  return ( <>
     {loaded && <Container className='chat'>
          <h4 className='chat_title'>{selected_chat.title}</h4>
          <ListGroup className='chat_messages'>
            {messagesOfChat.map((item) => {
                return (
                    <ListGroupItem  className="border-0" key={item._id}>
                        <Message message={item}  key={item._id+"m"}/>
                    </ListGroupItem>
                )
            })}
          </ListGroup>  
          <Form className='chat_input' >
              <Stack direction="horizontal" gap={3} className='p-3'>
                    <Form.Control type="text" onChange={(e)=>setMsg(e.target.value)}
                              onKeyPress={(e)=>handleKeyPress(e)} value={msg}/>  
                    <Button variant="secondary" size="lg" onClick={(e)=>handleSubmit(e)}>Send</Button>
           
              </Stack>
          </Form>
             
    </Container>}
    {!loaded && <Spinner animation="border" role="status">
                      </Spinner> }
    </> 
  )
}
