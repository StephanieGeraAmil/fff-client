import logo from './logo.svg';
import './styles/styles.css';


import { useAuth0 } from "@auth0/auth0-react";
import {MapSection} from './components/mapSection';
import {Login} from './components/login';
import {Logout} from './components/logout';




function App() {
      const { user, isAuthenticated, isLoading, loginWithRedirect ,logout} = useAuth0();
      console.log(isAuthenticated);
       

      
  return (
    <div className="App">
      <MapSection/>
      {!isAuthenticated && (<Login/>)}
      {isAuthenticated && (<Logout/>)}
 


     

    </div>
  );
}

export default App;
