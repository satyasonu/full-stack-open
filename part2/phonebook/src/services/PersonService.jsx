import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    const response = axios.get(baseUrl);
    return response.then(res=> res.data);
}

const create = (newobj) => {
  const response = axios.post(baseUrl, newobj);
  return response.then(res=> res.data);
}

export default {  getAll, create }