import { useEffect, useState } from "react";
import { getStudents , updateStudent } from "../Services/api";
import { useNavigate, useParams } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({ name: "", email: "",number:"", course: "" ,batch:""});

  useEffect(() => {
    getStudents(id).then(res => setStudent(res.data));
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    await updateStudent(id, student);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h3>Edit Student</h3>
      <form onSubmit={submit}>
        <input type="text" className="form-control mb-2" placeholder="Name"value={student.name}onChange={e => setStudent({ ...student, name: e.target.value })}/> <br></br>
        <input type="text" className="form-control mb-2" placeholder="Email"value={student.email}onChange={e => setStudent({ ...student, email: e.target.value })}/><br></br>
        <input type="text" className="form-control mb-2" placeholder="Phone Number"value={student.number}onChange={e => setStudent({ ...student, number: e.target.value })}/><br></br>
        <input type="text" className="form-control mb-2" placeholder="Course"value={student.course}onChange={e => setStudent({ ...student, course: e.target.value })}/><br></br>
        <input type="text" className="form-control mb-2" placeholder="Batch"value={student.batch}onChange={e => setStudent({ ...student, batch: e.target.value })}/><br></br>
   <Stack spacing={2} direction="row">
      <Button variant="contained" type="submit"  style={{backgroundColor:'#9d4edd'}}>Update</Button>
    </Stack>
</form>

    </div>
  );
}

export default EditStudent;
