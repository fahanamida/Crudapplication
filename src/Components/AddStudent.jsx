import { useState } from "react";
import { addStudent } from "../Services/api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AddStudent() {
   const [student, setStudent] = useState({ name: "", email: "", number: "", course: "", batch: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      await addStudent(student);

      // 🔹 SweetAlert2 dark purple theme
      Swal.fire({
        title: 'Success!',
        text: 'Student added successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
        background: '#2e004f',
        color: '#ffffff',
        confirmButtonColor: '#8e44ad',
      }).then(() => {
        navigate("/list");
      });

    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to add student. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        background: '#2e004f',
        color: '#ffffff',
        confirmButtonColor: '#e74c3c', // red button for error
      });
      console.error(error);
    }
  };

  return (
    <div className="container mt-5 gap-4 w-50">
      <h2 style={{color:'whitesmoke'}}><b>Add Student</b></h2><br />
      <form onSubmit={submit}>
        <input className="form-control mb-2" placeholder="Name"
          onChange={e => setStudent({ ...student, name: e.target.value })} /> <br></br>
        <input className="form-control mb-2" placeholder="Email"
          onChange={e => setStudent({ ...student, email: e.target.value })} /> <br></br>
        <input className="form-control mb-2" placeholder="Phone Number"
          onChange={e => setStudent({ ...student, number: e.target.value })} /> <br></br>
        <input className="form-control mb-2" placeholder="Course"
          onChange={e => setStudent({ ...student, course: e.target.value })} /> <br></br>
        <input className="form-control mb-2" placeholder="Batch"
          onChange={e => setStudent({ ...student, batch: e.target.value })} /><br></br>
        <button className="btn ">Save</button>
      </form>
    </div>
  );
}

export default AddStudent;
