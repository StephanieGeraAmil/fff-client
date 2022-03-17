
import './styles/styles.css';
import { useDispatch , useSelector} from 'react-redux';
import React, { useEffect, useState } from 'react'

import {setForm,setUser} from './actions/globalStateActions.js';
import {getEvents} from './actions/eventActions.js';
import {getUsers} from './actions/userActions.js';
import { useAuth0 } from "@auth0/auth0-react";
import {MapSection} from './components/mapSection';
import {Login} from './components/login';
import {Logout} from './components/logout';
import { Link} from "react-router-dom"; 





function App() {
    const { user, isAuthenticated, isLoading, loginWithRedirect ,logout} = useAuth0();
    const dispatch= useDispatch();
    const [bdSearchDone, setBdSearchDone]=useState(false)
    const userLogged= useSelector((state)=>(state.current.user?state.current.user:null))
    const users= useSelector((state)=>(state.users?state.users:null))
    const events = useSelector((state) =>(state.events ? state.events :null));

      useEffect(()=>{
        dispatch(getEvents());
        dispatch(getUsers());
      },[])
    
      useEffect(()=>{
          if (!isLoading&& isAuthenticated){
            if(!userLogged ){      
              if(!users.logged){
                    if (!bdSearchDone) {
                      setBdSearchDone(true);
                      dispatch(setUser({"email":user.email}));   
                    }else{
                          dispatch(setForm({type:'AddUser'}));    
                    }
              }else{
                dispatch(setUser(users.logged));
              }
            }else{
               if(userLogged.gender==''||userLogged.birthDate==''|| user.aproximatelat==0||!user.aproximatelng==0){
                  dispatch(setForm({type:'AddUserInfo'}));
                }; 
            }
          } 
        },
        [isAuthenticated,users]);

      const OpenChats=()=>{

      }
  return (
    <div className="App">
      <MapSection/>
      {!isAuthenticated && (<Login/>)}
      {isAuthenticated && (<Logout/>)}
      {isAuthenticated && (<Link  to="/chats"> <button className="chat_section_button" onClick={() =>OpenChats()}></button> </Link> )}
    </div>
  );
}

export default App;
