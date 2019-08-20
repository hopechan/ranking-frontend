import React from "react";
import Barra from "../components/Grafico/Barra"
import {Card,CardBody,Row,Col} from "reactstrap";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col sm="12" md="4">
              <Card><CardBody><h4>Hola</h4></CardBody></Card>
            </Col>
            <Col sm="12" md="4">
              <Card><CardBody><h4>Hola</h4></CardBody></Card>
            </Col>
            <Col sm="12" md="4">
              <Card><CardBody><h4>Hola</h4></CardBody></Card>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="10"><Barra/></Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
