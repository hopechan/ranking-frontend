import React from "react";
import { Card, CardBody, CardHeader, Col, ListGroup, Row } from "reactstrap";
import ModalNotas from "../components/Modales/ModalNotas";
import FormNota from "../components/Forms/FormNota";
import ListaNota from "../components/Listas/ListaNota";
class Nota extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="3" sm="6">
              <ListGroup>
                <ListaNota></ListaNota>
                <ListaNota></ListaNota>
                <ListaNota></ListaNota>
              </ListGroup>
              <br/>
            </Col>
            <Col md="9" sm="6">
              <Card>
                <CardBody>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default Nota;
