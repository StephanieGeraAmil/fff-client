import React ,{useState,useEffect}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {createUser} from '../actions/userActions'
import {updateUser} from '../actions/userActions'
import { setUser, unsetForm} from '../actions/globalStateActions'

import { useAuth0 } from "@auth0/auth0-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const AddUserForm = () => {
  const form = useSelector((state) =>(state.current.form ? state.current.form :null));
  const userLogged = useSelector((state) =>(state.current.user ? state.current.user :null));
  const dispatch= useDispatch();

  const {user,isAuthenticated, isLoading} = useAuth0();
  const [aproxLocation, setAproxLocation]=useState('');

  useEffect(()=>{
  if (!isLoading&& isAuthenticated) {  
 
    setUserData({...userData, email:user.email, name:user.nickname});
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
      if(form.type=="AddUser"){
       dispatch(createUser(userData)); 
        
      }else{
        dispatch(updateUser(userData)); 
      }    
      console.log('clear form')
      dispatch(unsetForm());
    };

  const handleAproxLocationChange=()=>{
    //use that input as search 
    //set lat lng of map to user info
  
    
  }

  return (
    <div>
       <div className="form">
         <form onSubmit={handleSubmit}>
             <input className="cancel" readOnly value="X" onClick={()=>{dispatch(unsetForm());}}/>
              <div className="form-group"> 
                  <label className="m-2">Name: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={userData.name}
                      onChange={(e)=>setUserData({...userData, name:(e.target.value)})}
                      />
              </div>
               <div className="form-group"> 
                  <label className="m-2">Gender: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={userData.gender}
                      onChange={(e)=>setUserData({...userData, gender:(e.target.value)})}
                      />
              </div>
               <div className="form-group"> 
                  <label className="m-2">Aproximate Location: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={aproxLocation}
                      onChange={ (e)=> setAproxLocation(e.target.value)}
                      />
              </div>
              <div className="form-group">
                  <label className="m-2">Birth Date: </label>
                   <DatePicker selected={userData.birthDate} onChange={(date) => setUserData({...userData, birthDate:(date)})} />
                  
               </div>            
              <input type="submit" value="Save" className="submitButton" />                        
          </form>
       </div>
    </div>
  )
}
