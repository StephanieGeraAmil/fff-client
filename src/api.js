

import axios from 'axios';

const { REACT_APP_BACKEND_URL } = process.env;

const backend_url=REACT_APP_BACKEND_URL;
//const backend_url=""
const users_url= backend_url+"/users";
export const fetchUsers=()=>axios.get(users_url);
export const findUserByEmail=(userEmail)=> axios.get(`${users_url}/${userEmail}`);
export const createUser=(newUser)=> axios.post(users_url, newUser);
export const updateUser=(updatedUser)=> axios.patch(`${users_url}/${updatedUser._id}`, updatedUser);
export const deleteUser=(deleteUserId)=> axios.delete(`${users_url}/${deleteUserId}`);
const events_url= backend_url+"/events";
export const fetchEvents=()=>axios.get(events_url);
export const fetchEventsWithUserBelongingInfo=(user_id)=>axios.get(`${events_url}/${user_id}`);
export const createEvent=(newEvent)=> axios.post(events_url, newEvent);
export const updateEvent=(updatedEvent)=> axios.patch(`${events_url}/${updatedEvent._id}`, updatedEvent);
export const addUserToEvent=(updatedEvent)=> axios.patch(`${events_url}/${updatedEvent._id}`, updatedEvent);
export const deleteUserFromEvent=(updatedEvent)=> axios.patch(`${events_url}/${updatedEvent._id}`, updatedEvent);
export const deleteEvent=(deleteEventId)=> axios.delete(`${events_url}/${deleteEventId}`);
const chats_url= backend_url+"/chats";
export const fetchChats=()=>axios.get(chats_url);
export const fetchChatsOfUser=(userId)=>axios.get(`${chats_url}/${userId}`); 
export const createChat=(newChat)=> axios.post(chats_url, newChat);
export const updateChat=(updatedChat)=> axios.patch(`${chats_url}/${updatedChat._id}`, updatedChat);
export const deleteChat=(deleteChatId)=> axios.delete(`${chats_url}/${deleteChatId}`);
const messages_url= backend_url+"/messages";
export const fetchMessages=(chatId)=>axios.get(`${messages_url}/${chatId}`);
export const createMessage=(newMessage)=> axios.post(messages_url, newMessage);
export const updateMessage=(updatedMessage)=> axios.patch(`${messages_url}/${updatedMessage._id}`, updatedMessage);
export const deleteMessage=(deleteMessageId)=> axios.delete(`${messages_url}/${deleteMessageId}`);