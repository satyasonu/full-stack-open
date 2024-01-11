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

const deleteContact = (newobj) => {
  console.log(newobj)
    const response = axios.delete(`${baseUrl}/${newobj.id}`);
    return response.then(res => res);
}

const updateContact = (id, newobj) => { 
  const response = axios.put(`${baseUrl}/${id}`, newobj);
  return response.then(res => res.data);
}

export default {  getAll, create, deleteContact, updateContact }