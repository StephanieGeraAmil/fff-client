

import axios from 'axios';
const backend_url="http://localhost:5500"
//const backend_url=""
const users_url= backend_url+"/users";
export const fetchUsers=()=>axios.get(users_url);
export const findUserByEmail=(userEmail)=> axios.get(`${users_url}/`,userEmail);
export const createUser=(newUser)=> axios.post(users_url, newUser);
export const updateUser=(updatedUser)=> axios.patch(`${users_url}/${updatedUser._id}`, updatedUser);
export const deleteUser=(deleteUserId)=> axios.delete(`${users_url}/${deleteUserId}`);
const events_url= backend_url+"/events";
export const fetchEvents=()=>axios.get(events_url);
export const createEvent=(newEvent)=> axios.post(events_url, newEvent);
export const updateEvent=(updatedEvent)=> axios.patch(`${events_url}/${updatedEvent._id}`, updatedEvent);
export const deleteEvent=(deleteEventId)=> axios.delete(`${events_url}/${deleteEventId}`);
