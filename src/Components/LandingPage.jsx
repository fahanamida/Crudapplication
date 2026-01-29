import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { PiStudentFill } from "react-icons/pi";

function LandingPage() {
  return (
    <div className="landing-wrapper d-flex align-items-center">
      <Container>
        <Row className="align-items-center text-center text-md-start">
            <Col md={6} className="mb-5 mb-md-0">
                <h1 className="landing-title">
                Student <br /> Management System
                </h1>
                <p className="landing-subtitle mt-3">
                <h4><b>All Your Student Data. One Dashboard</b> <br /></h4>
                <h6><i>Stop using spreadsheets. Manage students faster and smarter</i></h6>
                </p>
                <div className="d-flex gap-3 mt-4 justify-content-center justify-content-md-start">
                <Link to="/list" className="btn btn-lg" style={{color:'#363336',fontSize:"25px"}}>
                    <b>Lisits</b>
                </Link>
                <Link to="/add" className="btn btn-lg" style={{color:'#363336',fontSize:"25px"}}>
                    <b>Add Student</b>
                </Link>
                </div>
            </Col>
            <Col md={6} className="text-center">
                <div className="landing-visual-card">
                    <div className="icon-ring">
                    <PiStudentFill size={90} />
                    </div>
                    <h3 className="mt-4 fw-bold">Student Dashboard</h3>
                    <p className="landing-desc mt-2">
                    <b>All Your Student Data. One Dashboard</b>,<br />
                    courses & batches efficiently
                    </p>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
