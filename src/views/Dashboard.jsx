import React from "react";
import Barra from "../components/Grafico/Barra"
import {Card,CardBody,CardTitle,Row,Col} from "reactstrap";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col sm="12" md="4">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-chart-bar-32 text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Ranking</p>
                        <CardTitle tag="p"></CardTitle>
                        <p />
                      </div>
                    </Col>      
                  </Row>
                </CardBody>
              </Card>
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
