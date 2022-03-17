import React from 'react';
import { Link} from "react-router-dom"; 
import {Logout} from './logout';
import { useAuth0 } from "@auth0/auth0-react";

export const ChatSection = () => {
    const { isAuthenticated} = useAuth0();
  return (
    <div>
      <Link  to="/"> <button className="map_button"></button> </Link>
       {isAuthenticated && (<Logout/>)}
      </div>
  )
}
