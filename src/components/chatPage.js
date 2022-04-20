import React ,{useEffect, useState}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {Message} from './message';
import {setMessages, addMessage} from '../actions/messageActions';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import 'bootstrap/dist/css/bootstrap.min.css'

import {io} from 'socket.io-client';


export const ChatPage = ({selected_chat}) => {
  const id=selected_chat._id;
  const dispatch=useDispatch();
  const chats= useSelector((state)=>state.chats)
  const chat =chats.find(element=>element._id==id);
  const messagesOfChat = useSelector((state)=>state.messages)
  const currentUser = useSelector((state)=>state.current.user)

  const [msg, setMsg]= useState("")
  const [skt, setSkt]= useState({})

  const handleKeyPress=(e)=>{
    if(e.key === 'Enter'){
      handleSubmit();
     }  
  }
  const handleSubmit=()=>{
    skt.emit("message-sent", {   sender:currentUser,
                                  content:msg},
                                  id);
    setMsg(""); 
  }
  useEffect(()=>{

      const socket=io(process.env.REACT_APP_BACKEND_URL);
     
      socket.on("connect",()=>{
                        socket.emit("get-last-100-messages",id);
                      }); 
   
      socket.on("last-100-messgaes-from-chat",(data)=> {
                                dispatch(setMessages(data))
                              });
      socket.on ("message-created", (message)=>{
                                                  dispatch(addMessage(message));
                                                });
      setSkt(socket);
      
  },[])
  
  return (
    <>
          <h4>{selected_chat.title}</h4>
          <ListGroup>
            {messagesOfChat.map((item) => {
                return (
                    <ListGroupItem  key={item._id}>
                        <Message message={item} />
                    </ListGroupItem>
                )
            })}
          </ListGroup>  
          <Form>
            
                      <Form.Control type="text" placeholder=" "  onChange={(e)=>setMsg(e.target.value)}
                              onKeyPress={(e)=>handleKeyPress(e)} />  
                          {/* <input  type="text"
                              required
                              className="form-control"
                              value={msg}
                              onChange={(e)=>setMsg(e.target.value)}
                              onKeyPress={(e)=>handleKeyPress(e)}
                              /> */}
                         
            
              <Button variant="secondary" size="lg" onClick={()=>handleSubmit()}>Send</Button>
           </Form>
             
    </>
  )
}
