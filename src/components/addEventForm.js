import React ,{useState}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {createEvent} from '../actions/eventActions'
import { unsetForm} from '../actions/globalStateActions'

export const AddEventForm = () => {
  const form = useSelector((state) =>(state.current.form ? state.current.form :null));
  const events = useSelector((state) =>(state.events ? state.events :null));
  const userLogged = useSelector((state) =>(state.current.user ? state.current.user :null));
  const dispatch= useDispatch();


  const typesAvaiable=[
                  {name:"Bible Study", img: `/bible.png`, id:1},
                  {name:"Coffee", img: `/coffee.png`, id:2},
                  {name:"Pizza", img: `/pizza.png`, id:3},
                  {name:"Church", img: `/church.png`, id:4},
                  {name:"Movies", img: `/tv.png`, id:5},
                  {name:"Fitness",img: `/fitness.png`, id:6},
                  {name:"Pray",img: `/pray.png`, id:7}];


  const [eventData, setEventData]=useState({
         title:'',
         description:'',
         type: typesAvaiable[0].name,
         img:"."+typesAvaiable[0].img,
         lat:form.position.lat, 
         lng:form.position.lng,
         creator: userLogged._id
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
