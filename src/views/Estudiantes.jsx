import React from "react";
import TablaEstudiantes from '../components/TablaEstudiante/TablaEstudiante'
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import TablaEstudiante from "components/TablaEstudiante/TablaEstudiante";

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
