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
              <a href="/admin/estudiantes">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center text-danger">
                        <i className="nc-icon nc-single-02" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Alumnos Participantes</p>
                        <CardTitle tag="p"></CardTitle>
                        <p/>
                      </div>
                    </Col>      
                  </Row>
                </CardBody>
              </Card>
              </a>
            </Col>
            <Col sm="12" md="4"><a href="/admin/Alumnos3">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-single-02 text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category"> Alumnos Ranking</p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card></a>
            </Col>
            <Col sm="12" md="4">
              <Card className="card-stats">
                <CardBody>
                    <Row>
                      <Col md="4" xs="5">
                        <div className="icon-big text-center icon-warning">
                          <i className="nc-icon nc-chart-bar-32 text-danger" />
                        </div>
                      </Col>
                      <Col md="8" xs="7">
                        <div className="numbers">
                          <p className="card-category">Mejor Promedio</p>
                          <CardTitle tag="p"> </CardTitle>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
              </Card>
            </Col>
          </Row>    
          <Row className="justify-content-center">
            <Col sm="12" md="10"><Barra/></Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
