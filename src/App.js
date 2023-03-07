
import './styles/styles.css';
import React, { useEffect, useState } from 'react'
import { TopSection } from './components/TopSection';
import {MapSection} from './components/MapSection';

const App=()=> {
     return (
    <div className="App">
        <TopSection/>
      <MapSection/>
     </div>
  );
}

export default App;

