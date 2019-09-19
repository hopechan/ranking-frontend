import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import ListaNota from "../components/Listas/ListaNota";
import TabsNotas  from "../components/Tabs/TabsNotas";

class Nota extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="3" sm="6">
              <ListaNota tipo = "CCGK"></ListaNota>
              <ListaNota tipo = "Centro Escolar"></ListaNota>
              <ListaNota tipo = "Certificaciones"></ListaNota>
              <br/>
            </Col>
            <Col md="9" sm="6">
              <Card>
                <CardBody>
                  <TabsNotas materia = {}/>
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
