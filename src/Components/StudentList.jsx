import { useEffect, useState } from "react";
import { getStudents,  deleteStudent } from "../Services/api";
import { Link } from "react-router-dom";
import Search from "./Search";
import { Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const loadStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      await deleteStudent(id);
      loadStudents();
      Swal.fire('Deleted!', 'The student has been deleted.', 'success');
    }
  };

  return (
    <div className="container mt-4">
      <Row className="align-items-center mb-3">
        <Col xs={12} md={6} className="mb-2 mb-md-0">
          <Link className="btn btn- w-50 d-flex justify-content-center align-items-center"  to="/add">
           <PiStudentFill style={{fontSize:'30px',gap:'5px'}} /> Add Student
          </Link>
        </Col>
        <Col xs={12} md={6} className="  w-100 d-flex justify-content-center align-items-center">
          <Search setSearch={setSearch} />
        </Col>
      </Row>

      <div className="row g-3">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((s) => (
            <div key={s.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{s.name}</h5>
                  <p className="mb-1"><b>Email:</b> {s.email}</p>
                  <p className="mb-1"><b>Phone:</b> {s.number}</p>
                  <p className="mb-1"><b>Course:</b> {s.course}</p>
                  <p className="mb-1"><b>Batch:</b> {s.batch}</p>

                  <div className="d-flex justify-content-between mt-3">
                    <Link to={`/edit/${s.id}`} className="btn  btn-sm">
                       <FaUserEdit style={{fontSize:'30px'}} /> Edit 
                    </Link>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(s.id)}>
                      <MdDelete style={{fontSize:'30px',color:'rgb(227, 103, 103)'}} />Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-4">No students found</p>
        )}
      </div>
    </div>
  );
}

export default StudentList;
