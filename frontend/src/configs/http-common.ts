import axios from 'axios';

export default axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Accept, Authorization"
  }
});