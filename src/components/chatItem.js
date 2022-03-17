import React from 'react'
import {MessagesList} from './messagesList';

export const ChatItem = ({chat}) => {
  return (
    <div>
          <h4 className="chat_last">{chat._id}</h4>
          <h4 className="chat_img ">{chat.img}</h4>
    </div>
  )
}
