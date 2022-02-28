import React ,{useState}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {createEvent} from '../actions/eventActions'
import { unsetForm} from '../actions/globalStateActions'

export const AddEventForm = () => {
  const dispatch= useDispatch();
  const typesAvaiable=['Bible Study', "Coffee", "Pizza","Church","Movies", "Fitness"]
  const [eventData, setEventData]=useState({
         title:'',
         description:'',
         type:'',
         lat:'',
         lng:'',

     })


    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createEvent(eventData));
        setEventData({
         title:'',
         description:'',
         type:'',
         lat:'',
         lng:'',

     })
        dispatch(unsetForm());
      };

  return (
    <div>
       <div className="form">
         <form onSubmit={handleSubmit}>
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
             
              
                    <select  className="form-control dropdown" value={eventData.type}   onChange={(e)=>setEventData({...eventData, type:e.target.value})}>
                        {typesAvaiable.map(item=><option  key={item}>{item}</option>)}
                    </select>



              </div>
               <div className="bottom mt-5">
                   <input className="submitButton cancel" readOnly value="X" onClick={()=>{dispatch(unsetForm());}}/>
                <input type="submit" value="Add Event" className="submitButton" />
                               
              </div> 
          </form>
       </div>
    </div>
  )
}
