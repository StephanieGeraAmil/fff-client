import React ,{useEffect, useState}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {updateEvent} from '../actions/eventActions'
import { unsetForm} from '../actions/globalStateActions'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/esm/Stack';

export const EditEventForm = ({actionMethod}) => {
  const form = useSelector((state) =>(state.current.form ? state.current.form :null));
  const dispatch= useDispatch();

  
   const [day, setDay]=useState();
   const [month, setMonth]=useState();
   const [year, setYear]=useState();
   const [yearValues, setYearValues]=useState([]);
   const [dayValues, setDayValues]=useState([]);

   const generateArrayOfDays=()=> {
      const days=[]
      let dayNum;

      if (
         (month === "0") |
         (month === "2") |
         (month === "4") |
         (month === "6") |
         (month === "7") |
         (month ==="9") |
         (month === "11")
      ) {
         dayNum = 31;
      } else if (
         (month === "3") |
         (month === "5") |
         (month === "8") |
         (month ==="10")
      ) {
         dayNum = 30;
      } else {
         
         const isLeap = new Date(year, 1, 29).getMonth() == 1;
         isLeap ? (dayNum = 29) : (dayNum = 28);
      }
      for (let i = 1; i <= dayNum; i++) {
         days.push(i)
      }
      setDayValues(days)
   }


   const monthVaules=[ {value:0, name:"January"},
                        {value:1, name:"February"},
                        {value:2, name:"March"},
                        {value:3, name:"April"},
                        {value:4, name:"May"},
                        {value:5, name:"June"},
                        {value:6, name:"July"},
                        {value:7, name:"August"},
                        {value:8, name:"September"},
                        {value:9, name:"October"},
                        {value:10, name:"November"},
                        {value:11, name:"December"},
   ];

   const generateArrayOfYears=()=> {
         const min = new Date().getFullYear();
         const max = min + 10;
         const years=[]
         for (let i = max; i >= min; i--) {
            years.push(i)
         }
         setYearValues(years);
      
   }



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
   const [eventData, setEventData]=useState({});

   useEffect(()=>{
      generateArrayOfDays();
      setDate();
   },[day,month,year])

   useEffect(()=>{
      generateArrayOfDays();
      generateArrayOfYears();
      if(form.event.end_date){
         setDay(new Date(form.event.end_date).getDate().toString());
         setMonth((new Date(form.event.end_date).getMonth()).toString());
         setYear(new Date(form.event.end_date).getFullYear().toString());
     
      }else{
         const date= new Date();
         setDay(date.getDate().toString());
         setMonth((date.getMonth()+1).toString());
         setYear(date.getFullYear().toString());
      }
      setDate();

   },[])

  
 
    useEffect(()=>{
        const typeselected=typesAvaiable.find(item=>(item.name===type));
  
        setEventData({...eventData, 
                            _id:form.event._id,
                            title:title,
                            description:description,
                            type:type,
                            img:typeselected.img, });
      
      
      
   },[title,description,type])

   const handleSubmit=(e)=>{
      e.preventDefault();
      // socket.emit("update-event",eventData);      
       actionMethod(eventData);
      dispatch(unsetForm());
   };

   const setDate=()=>{
      const dateToStore = new Date(year, month, day);
      setEventData({...eventData, end_date:dateToStore});
   }

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
                       <Stack direction="horizontal" gap={3} className='mb-3' >
              <Form.Select  onChange={(e)=>{setDay(e.target.value);}} value={day} >
              { dayValues.map((day)=> {return( <option key={day} value={day}>{day}</option>)})}
                  
              
              </Form.Select>
              <Form.Select   onChange={(e)=>{setMonth(e.target.value);}} value={month}>
                    { monthVaules.map((m)=> {return( <option key={m.value} value={m.value}>{m.name}</option>)})}
                  
              </Form.Select>
              <Form.Select  onChange={(e)=>{setYear(e.target.value);}} value={year} >
                      { yearValues.map((year)=> {return( <option key={year} value={year}>{year}</option>)})}
              </Form.Select>
              </Stack>
              <Button variant="secondary" size="lg" className='mb-3' onClick={(e)=>handleSubmit(e)}>Edit Event</Button>                               
          </Form>
        </Modal.Body> 
     </>
 
  )
}
