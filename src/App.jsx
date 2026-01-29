import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import LandingPage from "./Components/LandingPage";
import StudentList from "./Components/StudentList";
import AddStudent from "./Components/AddStudent";
import EditStudent from "./Components/EditStudent";

import logo from "./assets/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar className="py-3">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand className="d-flex align-items-center gap-3">
            <img src={logo} alt="logo" style={{ width: 50 }} />
            <h1 className="mb-0 fw-bold">Management System</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list" element={<StudentList />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
