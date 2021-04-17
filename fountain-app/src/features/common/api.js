import axios from 'axios'; 

export const AUTH_USER = "58.96.77.210:5000/api/auth0"; 

export const authenticateCredentials = async () => await axios.get(AUTH_USER);
