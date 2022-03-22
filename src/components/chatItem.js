import React from 'react'

import { Link} from "react-router-dom"; 

export const ChatItem = ({chat}) => {
  const id=chat._id;
   const title=chat.title;
  return (
    <Link  to={id} params={{chat:{chat}}} >
      <div className='chat_item'>
          <div className='chat_preview'>    
            <h4>{title}</h4>
            <p>{id}</p>
          </div>
            
      </div>
    </Link>
  )
}
