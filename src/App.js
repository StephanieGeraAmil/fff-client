import logo from './logo.svg';
import './styles/styles.css';


import { useAuth0 } from "@auth0/auth0-react";
import {MapSection} from './components/mapSection';
import {Login} from './components/login';

function App() {
      const { user, isAuthenticated, isLoading, loginWithRedirect ,logout} = useAuth0();

      
  return (
    <div className="App">
      {isAuthenticated &&  <MapSection/>}
      {!isAuthenticated && (<Login/>)}
     

    </div>
  );
}

export default App;
