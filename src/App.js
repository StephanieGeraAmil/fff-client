import logo from './logo.svg';
import './styles/styles.css';
import { useDispatch , useSelector} from 'react-redux';
import React, { useEffect } from 'react'
import {findUser} from './actions/userActions.js'
import {setForm} from './actions/globalStateActions.js'
import { useAuth0 } from "@auth0/auth0-react";
import {MapSection} from './components/mapSection';
import {Login} from './components/login';
import {Logout} from './components/logout';




function App() {
      const { user, isAuthenticated, isLoading, loginWithRedirect ,logout} = useAuth0();
       const dispatch= useDispatch();
       const userLogged= useSelector((state)=>(state.current.user?state.current.user:null))
       
      
   
       useEffect(()=>{
          if (!isLoading&& isAuthenticated) {  
             dispatch(findUser({"email":user.email}));
             console.log(userLogged)
             if(userLogged==null){
                dispatch(setForm({type:'AddUser'}));
             }else if(userLogged.gender||userLogged.birthDate|| user.aproximatelat|| user.aproximatelng){
                dispatch(setForm({type:'AddUserInfo'}));
             }
            // if(userLogged.gender||userLogged.birthDate|| user.aproximatelat|| user.aproximatelng){
              // console.log(userLogged)
              //  dispatch(setForm({type:'AddUserInfo'}));
             //}
          }
         },
      
        [isAuthenticated]);

      
  return (
    <div className="App">
      <MapSection/>
      {!isAuthenticated && (<Login/>)}
      {isAuthenticated && (<Logout/>)}
    </div>
  );
}

export default App;
