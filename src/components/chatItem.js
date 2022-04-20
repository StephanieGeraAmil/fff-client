import React from 'react'
import {useDispatch , useSelector} from 'react-redux';
import {setSelectedChat, clearSelectedChat} from '../actions/globalStateActions.js';
import {getMessages} from '../actions/messageActions.js';
import Container from 'react-bootstrap/Container';

// import { Link} from "react-router-dom"; 

export const ChatItem = ({chat}) => {
  // const id=chat._id;
  // const title=chat.title;
  const dispatch= useDispatch();
  const selectedChat=useSelector((state)=>state.current.chat); 

  const onChatChange=(chat)=>{
    dispatch(setSelectedChat(chat));
    dispatch(getMessages(chat._id));

  }
  return (
    // <Link  to={id} params={{chat:{chat}}} >

      <Container onClick={()=>{onChatChange(chat)}}>
          {/* <div className='chat_preview'>     */}
            <h4>{chat.title}</h4>
       
            {/* <p>{chat.title.mesages[0]}</p> */}
            {/* {chat.users.map((item) => {
                return (
                    <label key={item}>{item} ,</label>
                )
            })} */}
          {/* </div> */}
            
      </Container>
    // </Link>
  )
}
