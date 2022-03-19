import React from 'react'

import { Link} from "react-router-dom"; 

export const ChatItem = ({chat}) => {
  const id=chat._id;
  return (
    <Link  to={id}>
      <div>
            <h4 className="chat_last">{id}</h4>
            <h4 className="chat_img ">{chat.img}</h4>
            
      </div>
    </Link>
  )
}
