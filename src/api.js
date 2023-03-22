import axios from "axios";

const { REACT_APP_REST_BACKEND_URL } = process.env;

const backend_url = REACT_APP_REST_BACKEND_URL;
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
//const backend_url=""
const users_url = backend_url + "/users";
export const fetchUsers = () => axios.get(users_url);
export const findUserByEmail = (userEmail) =>
  axios.get(`${users_url}?email=${userEmail}`);
export const createUser = (newUser) => axios.post(users_url, newUser);
export const updateUser = (updatedUser) =>
  axios.put(`${users_url}/${updatedUser.id}`, updatedUser);
export const deleteUser = (deleteUserId) =>
  axios.delete(`${users_url}/${deleteUserId}`);
const events_url = backend_url + "/events";
export const fetchEvents = () => axios.get(events_url);
export const fetchEventsWithUserBelongingInfo = (user_id) =>
  axios.get(`${events_url}/${user_id}`);
export const createEvent = (newEvent) => axios.post(events_url, newEvent);
export const updateEvent = (updatedEvent) =>
  axios.patch(`${events_url}/${updatedEvent._id}`, updatedEvent);
export const addUserToEvent = (updatedEvent) =>
  axios.patch(`${events_url}/${updatedEvent._id}`, updatedEvent);
export const deleteUserFromEvent = (updatedEvent) =>
  axios.patch(`${events_url}/${updatedEvent._id}`, updatedEvent);
export const deleteEvent = (deleteEventId) =>
  axios.delete(`${events_url}/${deleteEventId}`);
