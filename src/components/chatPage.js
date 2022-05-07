import React ,{useEffect, useState}from 'react'
import {useSelector } from 'react-redux';
import {Message} from './message';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css'


export const ChatPage = ({ socket}) => {

  const selectedChat=useSelector((state)=>state.current.chat); 
  const messagesOfChat = useSelector((state)=>state.messages)
  const currentUser = useSelector((state)=>state.current.user)
  const [loaded, setLoaded]= useState(false)
  const [msg, setMsg]= useState("")
 

  const handleKeyPress=(e)=>{
    if(e.key === 'Enter'){
       handleSubmit(e)
     }  
  }
  const handleSubmit=(e)=>{
     e.preventDefault();
    socket.emit("message-sent", {   sender:currentUser,
                                  content:msg},
                                  selectedChat._id);
    setMsg("");
  }

  useEffect(()=>{
    setLoaded(true);
  },[messagesOfChat])
  
  return ( <>
     {loaded && <Container className='chat'>
       <Stack className='d-flex flex-row'>
         <Image thumbnail={true}  roundedCircle={true} src={selectedChat.img} style={{maxWidth: '50px',maxHeight: '50px'}}/>   
          <h4 className='m-2 chat_title'>{selectedChat.title}</h4>
          </Stack>
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
                    <Button variant="secondary" size="sm" onClick={(e)=>handleSubmit(e)}>Send</Button>
           
              </Stack>
          </Form>
             
    </Container>}
    {!loaded && <Spinner animation="border" role="status">
                      </Spinner> }
    </> 
  )
}
