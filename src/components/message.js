import React from 'react'
import { useDispatch,useSelector } from 'react-redux';

export const Message = ({message}) => {
    const currentUser = useSelector((state)=>state.current.user)
    const messageUser=message.sender;
  return (
  <>
   {messageUser!==currentUser._id &&( <div className="message_received"> 
                                            <label >{message.content}</label>
    
                                     </div>)}
   {messageUser===currentUser._id &&( <div className="message_sent"> 
                                            <label >{message.content}</label>
    
                                     </div>)}
  </>
  )
}
