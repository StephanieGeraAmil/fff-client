import React ,{useEffect, useState}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {createEvent} from '../actions/eventActions'
import { unsetForm} from '../actions/globalStateActions'
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/esm/Stack';

export const AddEventForm = ({socket}) => {
  const form = useSelector((state) =>(state.current.form ? state.current.form :null));
  const userLogged = useSelector((state) =>(state.current.user ? state.current.user :null));
  const dispatch= useDispatch();
  const date= new Date();
  const [day, setDay]=useState(date.getDate().toString());
  const [month, setMonth]=useState((date.getMonth()+1).toString());
  const [year, setYear]=useState(date.getFullYear().toString());
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


  const [eventData, setEventData]=useState({
         title:'',
         description:'',
         type: typesAvaiable[0].name,
         img:"."+typesAvaiable[0].img,
         lat:form.positionSelected.lat, 
         lng:form.positionSelected.lng,
         creator: userLogged._id,
      
   
    });
  useEffect(()=>{
      generateArrayOfDays();
      setDate();
  },[day,month,year])

  useEffect(()=>{
      generateArrayOfDays();
      generateArrayOfYears();
  },[])

  const handleSubmit=(e)=>{
      e.preventDefault();
      socket.emit("event-created",eventData);    
      dispatch(unsetForm());
    };

  const setDate=()=>{
      const dateToStore = new Date(year, month, day);
      setEventData({...eventData, end_date:(dateToStore)})
  }

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
              <Stack direction="horizontal" gap={3} className='mb-3' >
              <Form.Select  onChange={(e)=>{setDay(e.target.value); } } defaultValue={day} >
              { dayValues.map((day)=> {return( <option key={day}>{day}</option>)})}
                  
              
              </Form.Select>
              <Form.Select   onChange={(e)=>{setMonth(e.target.value); }} defaultValue={month}>
                    { monthVaules.map((m)=> {return( <option key={m.value} value={m.value}>{m.name}</option>)})}
                  
              </Form.Select>
              <Form.Select  onChange={(e)=>{setYear(e.target.value);  }} defaultValue={year} >
                      { yearValues.map((year)=> {return( <option key={year}>{year}</option>)})}
              </Form.Select>
              </Stack>

               <Button variant="secondary" size="lg" className='mb-3' onClick={(e)=>handleSubmit(e)}>Add Event</Button>

                                     
          </Form>
       </Modal.Body>
       </>
 
  )
}
