import logo from './logo.svg';
import './App.css';
import {AddEventForm} from './components/addEventForm';
import {JoinEventForm} from './components/joinEventForm';
import {MapSection} from './components/mapSection';

function App() {
  return (
    <div className="App">
      <AddEventForm/>
      <JoinEventForm/>
      <MapSection/>

    </div>
  );
}

export default App;
