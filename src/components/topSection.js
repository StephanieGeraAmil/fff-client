import { useDispatch , useSelector} from 'react-redux';
import React, { useEffect, useState } from 'react'

import {setForm,setUser} from './../actions/globalStateActions.js';
import {getUsers} from './../actions/userActions.js';
import { useAuth0 } from "@auth0/auth0-react";
import {Login} from './login';
import {Logout} from './logout';
import { Link,useLocation} from "react-router-dom"; 

export const TopSection = () => {
    const { user, isAuthenticated, isLoading, loginWithRedirect ,logout} = useAuth0();
    const dispatch= useDispatch();
    const [bdSearchDone, setBdSearchDone]=useState(false)
    const userLogged= useSelector((state)=>(state.current.user?state.current.user:null))
    const users= useSelector((state)=>(state.users?state.users:null))
    const location = useLocation();

    useEffect(()=>{
       
          if (!isLoading&& isAuthenticated){
            if(!userLogged ){   
              //I already checked the db?   
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
  return (
      <>
       {!isAuthenticated && (<Login/>)}
      {isAuthenticated &&(<div className='top_section'>
                            {(location.pathname=='/' ) && (<Link  to="/chats" > <button className=" top_link chat_section_button"></button> </Link> )}
                            {(location.pathname=='/chats') && (<Link  to="/" > <button className="top_link map_button"></button> </Link>)}
                            <Logout/>
                        </div>)}
      </>
  )
}
