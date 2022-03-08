import React ,{useState}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {createEvent} from '../actions/eventActions'
import { unsetForm} from '../actions/globalStateActions'

export const AddEventForm = () => {
  const form = useSelector((state) =>(state.current.form ? state.current.form :null));
  const events = useSelector((state) =>(state.events ? state.events :null));
  const userLogged = useSelector((state) =>(state.current.user ? state.current.user :null));
  const dispatch= useDispatch();


 
  const [userData, setUsertData]=useState({
         name:'',
         email:'',
         aproximatelat: typesAvaiable[0].name,
         aproximatelng:"."+typesAvaiable[0].img,
         gender:form.position.lat,
         birthDate:'',
        
  
    });


  const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(createEvent(eventData));       
      dispatch(unsetForm());
    };

  return (
    <div>
       <div className="form">
         <form onSubmit={handleSubmit}>
             <input className="cancel" readOnly value="X" onClick={()=>{dispatch(unsetForm());}}/>
              <div className="form-group"> 
                  <label className="m-2">Title: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={eventData.title}
                      onChange={(e)=>setEventData({...eventData, title:(e.target.value)})}
                      />
              </div>
               <div className="form-group"> 
                  <label className="m-2">Description: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={eventData.description}
                      onChange={(e)=>setEventData({...eventData, description:(e.target.value)})}
                      />
              </div>
              <div className="form-group">
                  <label className="m-2">Type: </label>
                  <select  className="form-control dropdown" value={eventData.type}   onChange={(e)=>setEventData({...eventData, type:e.target.value, img:"."+typesAvaiable.find(item=>item.name===e.target.value).img})}>
                        {typesAvaiable.map(item=><option  key={item.id}>
                                                      {item.name} 
                                                      {/* <div  className="div_img" style={{
                                                      backgroundImage: `url("/bible.png")`
                                                      }}> 
                                                      </div> */}
                                                  </option>)}
                  </select>
               </div>            
              <input type="submit" value="Add Event" className="submitButton" />                        
          </form>
       </div>
    </div>
  )
}
