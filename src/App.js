import logo from './logo.svg';
import './styles/styles.css';
import { useDispatch , useSelector} from 'react-redux';
import React, { useEffect, useState } from 'react'

import {setForm,setUser} from './actions/globalStateActions.js';

import { useAuth0 } from "@auth0/auth0-react";
import {MapSection} from './components/mapSection';
import {Login} from './components/login';
import {Logout} from './components/logout';




function App() {
      const { user, isAuthenticated, isLoading, loginWithRedirect ,logout} = useAuth0();
      const dispatch= useDispatch();
     const [bdSearchDone, setBdSearchDone]=useState(false)
      const userLogged= useSelector((state)=>(state.current.user?state.current.user:null))
       const users= useSelector((state)=>(state.users?state.users:null))
      
   
       useEffect(()=>{
          if (!isLoading&& isAuthenticated){
            if(!userLogged ){      
              if(!users.logged){
                    if (!bdSearchDone) {  
                          //porque no lo bueque aun
                      setBdSearchDone(true);
                      console.log(user.email)
                      dispatch(setUser({"email":user.email}));   
                    }else{
                      //porque lo busque y no estaba
                          dispatch(setForm({type:'AddUser'}));    
                    }
              }else{
                //porque lo cree y aun lo lo agregue al estado logged global
                dispatch(setUser(users.logged));
              }
              
            }else{
          
               if(userLogged.gender==''||userLogged.birthDate==''|| user.aproximatelat==0||!user.aproximatelng==0){
                  dispatch(setForm({type:'AddUserInfo'}));
                }; 
            }
           
          }
           
        },
          
          
        //   if(userLogged==null){
        //         dispatch(setForm({type:'AddUser'}));
        //      }else if(userLogged.gender||userLogged.birthDate|| user.aproximatelat|| user.aproximatelng){
        //         dispatch(setForm({type:'AddUserInfo'}));
        //      }
        //  },
      
        [isAuthenticated,userLogged, users]);

      
  return (
    <div className="App">
      <MapSection/>
      {!isAuthenticated && (<Login/>)}
      {isAuthenticated && (<Logout/>)}
    </div>
  );
}

export default App;
