import React ,{useEffect, useState}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {updateEvent} from '../actions/eventActions'
import { unsetForm} from '../actions/globalStateActions'
import Form from 'react-bootstrap/Form';
//import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const EditEventForm = ({socket}) => {
  const form = useSelector((state) =>(state.current.form ? state.current.form :null));
  const dispatch= useDispatch();



  const typesAvaiable=[
                  {name:"Bible Study", img: `/bible.png`, id:1},
                  {name:"Coffee", img: `/coffee.png`, id:2},
                  {name:"Pizza", img: `/pizza.png`, id:3},
                  {name:"Church", img: `/church.png`, id:4},
                  {name:"Movies", img: `/tv.png`, id:5},
                  {name:"Fitness",img: `/fitness.png`, id:6},
                  {name:"Pray",img: `/pray.png`, id:7}];



  const [title, setTitle]=useState(form.event.title);
  const [description, setDescription]=useState(form.event.description);
  const [type, setType]=useState(form.event.type);
  const [eventData, setEventData]=useState();


  const handleSubmit=(e)=>{
    e.preventDefault();
    socket.emit("update-event",eventData);
    //dispatch(updateEvent(eventData));       
    dispatch(unsetForm());
    };
 
    useEffect(()=>{
        const typeselected=typesAvaiable.find(item=>(item.name===type));
  
        setEventData({...eventData, 
                            _id:form.event._id,
                            title:title,
                            description:description,
                            type:type,
                            img:typeselected.img, });
      
      
      
      },[title,description,type])


   return (
      <>
       <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
       </Modal.Header>
        <Modal.Body> 
          <Form>
              <Form.Control className='mb-3' value={title}    type="text" placeholder="Title"  onChange={(e)=>setTitle(e.target.value)}  />  
              <Form.Control className='mb-3'  value={description}    type="text" placeholder="Description"  onChange={(e)=>setDescription(e.target.value)}  />  

              <Form.Select className='mb-3' value={type} onChange={(e)=> setType(e.target.value)} >
              { typesAvaiable.map((item)=> {return( <option key={item.id}>{item.name}</option>)})}
              </Form.Select> 
              <Button variant="secondary" size="lg" className='mb-3' onClick={(e)=>handleSubmit(e)}>Edit Event</Button>                               
          </Form>
        </Modal.Body> 
     </>
 
  )
}
