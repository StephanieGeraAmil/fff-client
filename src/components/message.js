import React from 'react'
import { useDispatch,useSelector } from 'react-redux';

import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

export const Message = ({message}) => {
    const currentUser = useSelector((state)=>state.current.user)
    const messageUser=message.sender;
  return (
  <>
   {messageUser!==currentUser._id &&(<Card className="rounded-2 bg-light text-dark me-auto" style={{ width: '18rem' }}>
                                          <Card.Header as="h5">{message.content}</Card.Header>
                                      
                                           
                                      </Card>)}
   {messageUser===currentUser._id &&( <Card className="rounded-2 bg-secondary text-white ms-auto" style={{ width: '18rem' }}>
                                          <Card.Header as="h5">{message.content}</Card.Header>
                                      
                                           
                                      </Card>
                                    )}
   </>
  )

}
