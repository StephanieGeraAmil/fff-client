import React ,{useState,useEffect}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {createUser} from '../actions/userActions'
import {updateUser} from '../actions/userActions'
import { setUser, unsetForm} from '../actions/globalStateActions'
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";

// import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import Stack from 'react-bootstrap/esm/Stack';

export const AddUserForm = () => {
  const form = useSelector((state) =>(state.current.form ? state.current.form :null));
  const userLogged = useSelector((state) =>(state.current.user ? state.current.user :null));
  const dispatch= useDispatch();

  const {user,isAuthenticated, isLoading} = useAuth0();
   const date= new Date();
  const [day, setDay]=useState(date.getDate());
  const [month, setMonth]=useState(date.getMonth()+1);
  const [year, setYear]=useState(date.getFullYear());
  const dayVaules=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  const monthVaules=[1,2,3,4,5,6,7,8,9,10,11,12]
  const yearVaules=[2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024]
  
  useEffect(()=>{
  if (!isLoading&& isAuthenticated) {  
 
    setUserData({...userData, email:user.email, name:user.nickname});
   
  
    console.log(day)
       console.log(month)
          console.log(year)
  }
  },[])

  const [userData, setUserData]=useState({
         name:"",
         email:"",
         aproximatelat:-34.90328,
         aproximatelng:-56.18816,
         gender:'',
         birthDate:'',
        
  
    });

     


  const handleSubmit=(e)=>{
      e.preventDefault();
      setUserData({...userData,birthDate:(year.toString()+"-"+month.toString()+"-"+day.toString())})
      if(form.type=="AddUser"){
       dispatch(createUser(userData)); 
        
      }else{
        dispatch(updateUser(userData)); 
      }    
  
      dispatch(unsetForm());
    };

  const handleAproxLocationChange=(city)=>{
    //get coords
    //set lat lng of map to user info
  
    
  }

  return (
    <Form className='mt-5' >
      {/* <CloseButton /> */}
          <Form.Control className='mb-3'  type="text" placeholder="Name"  onChange={(e)=>setUserData({...userData, name:(e.target.value)})} defaultValue={userData.name} />  
          <Form.Select  className='mb-3' onChange={(e)=>setUserData({...userData, gender:(e.target.value)})} defaultValue="Female" >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
          </Form.Select>
          <Form.Control className='mb-3' type="text" placeholder="City"  onChange={(e)=>handleAproxLocationChange(e.target.value)} />  
          <Stack direction="horizontal" gap={3} className='mb-3' >
          <Form.Select  onChange={(e)=>setDay(e.target.value) } defaultValue={day} >
           { dayVaules.map((day)=> {return( <option value={day}>{day}</option>)})}
               
           
          </Form.Select>
          <Form.Select   onChange={(e)=>setMonth(e.target.value)} defaultValue={month}>
                { monthVaules.map((month)=> {return( <option value={month}>{month}</option>)})}
               
          </Form.Select>
          <Form.Select  onChange={(e)=>setYear(e.target.value)} defaultValue={year} >
                  { yearVaules.map((year)=> {return( <option value={year}>{year}</option>)})}
          </Form.Select>
          </Stack>
          <Button variant="secondary" size="lg" className='mb-3' onClick={(e)=>handleSubmit(e)}>Save</Button>

     </Form>

  )
}
