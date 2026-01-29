import axios from "axios";
// const apiUrl="http://localhost:3000/students"
const apiUrl="https://crudserver-tizq.onrender.com/students"

export const getStudents = () => axios.get(apiUrl);
export const getStudent = (id) => axios.get(`${apiUrl}/${id}`);
export const addStudent = (student) => axios.post(apiUrl, student);
export const updateStudent = (id, student) =>
  axios.put(`${apiUrl}/${id}`, student);
export const deleteStudent = (id) => axios.delete(`${apiUrl}/${id}`);
// https://crudserver-tizq.onrender.com