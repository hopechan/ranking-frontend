import React from "react";
import { Card, CardBody, CardHeader,Row, Col } from "reactstrap";
import ModalNotas from "../components/Modales/ModalNotas";
class Nota extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col sm="12" md="12">
              <Card>
                <CardHeader>Materias Centro Escolar</CardHeader>
                <CardBody><ModalNotas></ModalNotas></CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12">
              <Card>
                <CardHeader>Materias CCGK</CardHeader>
                <CardBody><h4>lorem</h4></CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="12">
              <Card>
                <CardHeader>Certificaciones</CardHeader>
                <CardBody><h4>lorem</h4></CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default Nota;
