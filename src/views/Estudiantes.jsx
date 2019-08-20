import React from "react";
import TablaEstudiante from '../components/Tablas/TablaEstudiante'
// reactstrap components
import { Row, Col } from "reactstrap";

class Estudiantes extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col sm="12" md="12"><TablaEstudiante responsive/></Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Estudiantes;
