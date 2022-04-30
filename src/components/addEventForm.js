import React ,{useEffect, useState}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {createEvent} from '../actions/eventActions'
import { unsetForm} from '../actions/globalStateActions'
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const AddEventForm = () => {
  const form = useSelector((state) =>(state.current.form ? state.current.form :null));
  const events = useSelector((state) =>(state.events ? state.events :null));
  const userLogged = useSelector((state) =>(state.current.user ? state.current.user :null));
  const dispatch= useDispatch();
 


  const typesAvaiable=[
                  {name:"Bible Study", img: `/bible.png`, id:1},
                  {name:"Coffee", img: `/coffee.png`, id:2},
                  {name:"Pizza", img: `/pizza.png`, id:3},
                  {name:"Church", img: `/church.png`, id:4},
                  {name:"Movies", img: `/tv.png`, id:5},
                  {name:"Fitness",img: `/fitness.png`, id:6},
                  {name:"Pray",img: `/pray.png`, id:7}];


  const [eventData, setEventData]=useState({
         title:'',
         description:'',
         type: typesAvaiable[0].name,
         img:"."+typesAvaiable[0].img,
         lat:form.positionSelected.lat, 
         lng:form.positionSelected.lng,
         creator: userLogged._id
    });


  const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(createEvent(eventData));       
      dispatch(unsetForm());
    };

  return (
  <>
        <Modal.Header closeButton>
            <Modal.Title>New Event</Modal.Title>
       </Modal.Header>
        <Modal.Body>
         <Form>
           <Form.Control className='mb-3'  type="text" placeholder="Title"  onChange={(e)=>setEventData({...eventData, title:(e.target.value)})}  />  
            <Form.Control className='mb-3'  type="text" placeholder="Description"  onChange={(e)=>setEventData({...eventData, description:(e.target.value)})}  />  

              <Form.Select className='mb-3'  onChange={(e)=>setEventData({...eventData, type:e.target.value, img:"."+typesAvaiable.find(item=>item.name===e.target.value).img})} >
              { typesAvaiable.map((item)=> {return( <option key={item.id}>{item.name}</option>)})}
              
              </Form.Select>

               <Button variant="secondary" size="lg" className='mb-3' onClick={(e)=>handleSubmit(e)}>Add Event</Button>

                                     
          </Form>
       </Modal.Body>
       </>
 
  )
}
